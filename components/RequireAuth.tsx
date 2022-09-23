import axios from "axios";
import { useEffect, useState } from "react";
import checkValidJwt from "../utilities/checkValidJwt";
import FullScreenLoader from "./FullScreenLoader";

interface Props {
  children: any;
}

export default function RequireAuth(props: Props) {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const jwt = localStorage.getItem("jwt");

      if (jwt) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

        const isJwtValid = await checkValidJwt();

        if (isJwtValid) setIsAuthenticated(true);
        else setIsAuthenticated(false);
      } else setIsAuthenticated(false);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <FullScreenLoader />
  ) : isAuthenticated ? (
    <>{children}</>
  ) : (
    <>please log in</>
  );
}
