import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Router, { useRouter } from "next/router";
import GoogleLogin from "react-google-login";
import fetchJwt from "../utilities/fetchJwt";
import { authStore } from "../store/authStore";

async function handleSuccess(response: any) {
  const tokenId = response.tokenId as string;

  const jwt = await fetchJwt(tokenId);
  console.log(jwt);
  // TODO: if jwt is undefined do something
  localStorage.setItem("jwt", jwt || "undefined");

  // Router.push("dashboard");
}

function handleFailure(err: any) {
  console.log(err);
}

export default function GoogleLoginCard() {
  const router = useRouter();
  return (
    <GoogleLogin
      onSuccess={async (res) => {
        await handleSuccess(res);
        router.push("dashboard");
      }}
      onFailure={async (err) => {
        await handleFailure(err);
      }}
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
    />
  );
}
