import axios from "axios"
import { Friendship, FriendshipWithUser } from "../../types/Friendship"
import { PublicUser } from "../../types/PublicUser"

export async function getFriendshipByUserId(userId: number) {
  try {
    const { data } = await axios.get<FriendshipWithUser>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/friendships/users/${userId}`
    )

    return data
  } catch (e) {
    console.log(e)
  }
}

export async function addFriend(recipientId: number) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/friendships`,
      { recipientId }
    )

    return data
  } catch (e) {
    console.log(e)
  }
}

export async function acceptFriendship(requesterId: number) {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/friendships`,
      { requesterId }
    )

    return data
  } catch (e) {
    console.log(e)
  }
}

export async function deleteFriendship(id: number) {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/friendships/${id}`
    )

    return data
  } catch (e) {
    console.log(e)
  }
}

export async function getFriendships(options?: Options) {
  try {
    const { data } = await axios.get<FriendshipWithUser[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/friendships`,
      {
        params: options,
      }
    )

    return data
  } catch (e) {
    console.log(e)
  }
}

type Options = {
  type?: "INCOMING" | "OUTGOING"
  status?: "PENDING" | "ACCEPTED"
}

type Data = (Friendship & {
  recipient: PublicUser
  requester: PublicUser
})[]
