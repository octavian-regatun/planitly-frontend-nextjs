import axios from "axios";

export default async function fetchJwt(tokenId: string) {
  try {
    const { data } = await axios.post<{ token: string }>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`,
      { tokenId }
    );

    return data.token;
  } catch (e) {
    console.log(e);
  }

  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`);
}
