import GoogleLogin from "react-google-login";
import fetchJwt from "../lib/fetchJwt";

async function handleSuccess(response: any) {
  const tokenId = response.tokenId as string;

  console.log(tokenId);
  console.log(await fetchJwt(tokenId));
}

function handleFailure(err: any) {
  console.log(err);
}

export default function GoogleLoginCard() {
  return (
    <GoogleLogin
      onSuccess={async (res) => {
        await handleSuccess(res);
      }}
      onFailure={async (err) => {
        await handleFailure(err);
      }}
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
    />
  );
}
