import axios from "axios";

export default async function checkValidJwt() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth`);

    if (res.status === 200) return true;

    return false;
  } catch (error) {
    console.log("jwt is invalid");

    return false;
  }
}
