import axios from "axios";

export default async function fetchJwt(code: string) {
  try {
    const {data} = await axios.post<string>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`,
      {code}
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}
