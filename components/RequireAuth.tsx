import axios from "axios";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
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

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const jwt = localStorage.getItem("jwt");

      if (jwt) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

        const isJwtValid = await checkValidJwt();

        if (isJwtValid) setIsAuthenticated(true);
        else {
          setIsAuthenticated(false);
          enqueueSnackbar("Please log in!", { variant: "error" });
          router.push("/");
        }
      } else {
        setIsAuthenticated(false);
        enqueueSnackbar("Please log in!", { variant: "error" });
        router.push("/");
      }
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <FullScreenLoader />
  ) : isAuthenticated ? (
    <>{children}</>
  ) : (
    <FullScreenLoader />
  );
}
