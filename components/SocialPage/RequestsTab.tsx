import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { MdCheck, MdClose } from "react-icons/md"
import {
  acceptFriendship,
  deleteFriendship,
  getFriendships,
} from "../../utilities/requests/friendshipsRequests"
import Text from "../Text"
import { FriendshipWithUser } from "../../types/Friendship"

export default function RequestsTab() {
  const [friendships, setFriendships] = useState<{
    incoming: FriendshipWithUser[]
    outgoing: FriendshipWithUser[]
  }>({
    incoming: [],
    outgoing: [],
  })

  const queryClient = useQueryClient()

  const getIncomingFriendshipsQuery = useQuery({
    queryKey: ["getIncomingFriendships"],
    queryFn: () => getFriendships({ status: "PENDING", type: "INCOMING" }),
    onSuccess(data) {
      setFriendships((prevState) => ({
        ...prevState,
        incoming: data!,
      }))
    },
  })

  const getOutgoingFriendshipsQuery = useQuery({
    queryKey: ["getOutgoingFriendships"],
    queryFn: () => getFriendships({ status: "PENDING", type: "OUTGOING" }),
    onSuccess(data) {
      setFriendships((prevState) => ({
        ...prevState,
        outgoing: data!,
      }))
    },
  })

  const acceptFriendshipMutation = useMutation({
    mutationFn: (id: number) => acceptFriendship(id),
  })

  const deleteFriendshipMutation = useMutation({
    mutationFn: (id: number) => deleteFriendship(id),
    onSuccess() {
      queryClient.invalidateQueries(["getIncomingFriendships"])
      queryClient.invalidateQueries(["getOutgoingFriendships"])
    },
  })

  return (
    <>
      {friendships.incoming.length > 0 ? (
        <>
          <Text type="h2" className="mb-2">
            Incoming
          </Text>
          <List className="rounded-b backdrop-brightness-75">
            {friendships.incoming.map((friendship) => (
              <ListItem
                key={`${friendship.requester.firstName}-${friendship.requester.lastName}-${friendship.requester.id}`}
                secondaryAction={
                  <div className="flex gap-4">
                    <IconButton
                      edge="end"
                      aria-label="accept"
                      onClick={() =>
                        acceptFriendshipMutation.mutate(friendship.requester.id)
                      }
                    >
                      <MdCheck color="green" />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => {
                        deleteFriendshipMutation.mutate(friendship.id)
                      }}
                    >
                      <MdClose color="red" />
                    </IconButton>
                  </div>
                }
              >
                <ListItemAvatar>
                  <Avatar className="bg-orange-500">OR</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${friendship.requester.firstName} ${friendship.requester.lastName}`}
                />
              </ListItem>
            ))}
          </List>
        </>
      ) : null}
      {friendships.outgoing.length > 0 ? (
        <>
          <Text type="h4" className="mb-2 text-center">
            Outgoing
          </Text>
          <List className="rounded-b backdrop-brightness-75">
            {friendships.outgoing.map((friendship) => (
              <ListItem
                key={`${friendship.recipient.firstName}-${friendship.recipient.lastName}-${friendship.recipient.id}`}
                secondaryAction={
                  <div className="flex items-center gap-4">
                    <Text type="body">PENDING</Text>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => {
                        deleteFriendshipMutation.mutate(friendship.id)
                      }}
                    >
                      <MdClose color="red" />
                    </IconButton>
                  </div>
                }
              >
                <ListItemAvatar>
                  <Avatar className="bg-orange-500">OR</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${friendship.recipient.firstName} ${friendship.recipient.lastName}`}
                />
              </ListItem>
            ))}
          </List>
        </>
      ) : null}
    </>
  )
}
