import { useGoogleLogin } from "@react-oauth/google";
import Router from "next/router";
import fetchJwt from "../utilities/requests/fetchJwt";

async function handleSuccess(response: string) {
  const jwt = await fetchJwt(response);

  console.log(jwt);

  // TODO: if jwt is undefined do something
  localStorage.setItem("jwt", jwt || "undefined");

  Router.push("/dashboard");
}

export default function GoogleLoginCard() {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleSuccess(codeResponse.code),
    flow: "auth-code",
  });

  return (
    <button
      onClick={login}
      className="flex items-center gap-2 px-4 py-2 text-white rounded-full bg-gradient-to-br from-purple-900 via-purple-800 to-violet-700"
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"
        className="w-6 h-6 rounded-full"
      />
      Log In with Google
    </button>
  );
}
