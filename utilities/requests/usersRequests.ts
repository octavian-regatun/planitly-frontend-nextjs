import axios from "axios"

export async function searchUsers(query: string) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/search`,
      { params: { query } }
    )

    return data
  } catch (e) {
    console.log(e)
  }
}
