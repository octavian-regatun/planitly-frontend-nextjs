import axios from "axios";
import { useEffect, useState } from "react";
import checkValidJwt from "../lib/checkValidJwt";

interface Props {
  children: any;
}

export default function RequireAuth(props: Props) {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      const isJwtValid = checkValidJwt();

      if (isJwtValid) setIsAuthenticated(true);
      else setIsAuthenticated(false);
    } else setIsAuthenticated(false);
  }, []);

  return isAuthenticated ? <>{children}</> : <>please log in</>;
}
