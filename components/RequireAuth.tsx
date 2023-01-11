import axios from "axios";
import { decode } from "jsonwebtoken";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useAuthStore, User } from "../store/authStore";
import checkValidJwt from "../utilities/checkValidJwt";
import fetchUser from "../utilities/requests/fetchUser";
import FullScreenLoader from "./FullScreenLoader";

interface Props {
  children: any;
}

type DecodedUser = User & {
  exp?: number;
  iat?: number;
};

export default function RequireAuth(props: Props) {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const user = useAuthStore(x => x.user);
  const setUser = useAuthStore(x => x.setUser);

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const jwt = localStorage.getItem("jwt");

      if (jwt) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

        const isJwtValid = await checkValidJwt();

        if (isJwtValid) {
          setIsAuthenticated(true);

          const { id } = decode(jwt, { complete: false }) as DecodedUser;

          const user = await fetchUser(id);

          setUser(user);
        } else {
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

  if (isLoading) return <FullScreenLoader />;
  if (isAuthenticated) return <>{children}</>;
  return <FullScreenLoader />;
}
