import { User } from "../store/authStore"
import { PublicUser } from "./PublicUser"

export interface Friendship {
  id: number
  recipientId: number
  requesterId: number
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface FriendshipWithUser extends Friendship {
  requester: PublicUser
  recipient: PublicUser
}
