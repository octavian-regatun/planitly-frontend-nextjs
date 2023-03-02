import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { MdPersonAdd, MdSearch } from "react-icons/md"
import { PublicUser } from "../../types/PublicUser"
import {
  addFriend,
  getFriendshipByUserId,
  getFriendships,
} from "../../utilities/requests/friendshipsRequests"
import { searchUsers } from "../../utilities/requests/usersRequests"
import { WhiteTextField } from "../WhiteTextField"
import { Friendship, FriendshipWithUser } from "../../types/Friendship"
import Text from "../Text"
import { useAuthStore } from "../../store/authStore"

export default function AddFriendTab() {
  const [query, setQuery] = useState("")

  const queryClient = useQueryClient()

  const user = useAuthStore((state) => state.user)

  const searchUsersMutation = useMutation({
    mutationKey: ["searchUsers"],
    mutationFn: (query: string) => searchUsers(query),
  })

  const getPendingFriendshipsQuery = useQuery({
    queryKey: ["getIncomingFriendships"],
    queryFn: () => getFriendships({ status: "PENDING" }),
  })

  function isFriendshipPending(userId: number) {
    const friendships = getPendingFriendshipsQuery.data ?? []

    return !!friendships.find(
      (friendship) =>
        (friendship.requesterId === userId ||
          friendship.recipientId === userId) &&
        friendship.status === "PENDING"
    )
  }

  const addFriendMutation = useMutation({
    mutationFn: (id: number) => addFriend(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["getIncomingFriendships"])
    },
  })

  useEffect(() => {
    if (query === "") return

    searchUsersMutation.mutate(query)
  }, [query])

  return (
    <>
      <WhiteTextField
        variant="outlined"
        label="Search user"
        fullWidth
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: <MdSearch color="white" size={32} />,
        }}
      />
      {query !== "" && (
        <List className="rounded-b backdrop-brightness-75">
          {searchUsersMutation.data?.map((user: PublicUser) => (
            <ListItem
              key={`${user.firstName}-${user.lastName}-${user.id}`}
              secondaryAction={
                isFriendshipPending(user.id) ? (
                  <Text type="body">PENDING</Text>
                ) : (
                  <IconButton
                    edge="end"
                    aria-label="add"
                    onClick={() => addFriendMutation.mutate(user.id)}
                  >
                    <MdPersonAdd color="white" />
                  </IconButton>
                )
              }
            >
              <ListItemAvatar>
                <Avatar className="bg-orange-500">OR</Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${user.firstName} ${user.lastName}`} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}
