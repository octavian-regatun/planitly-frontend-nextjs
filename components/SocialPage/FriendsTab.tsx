import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { PublicUser } from "../../types/PublicUser";
import {
  deleteFriendship,
  getFriendships,
} from "../../utilities/requests/friendshipsRequests";

export default function FriendsTab() {
  const [users, setUsers] = useState<PublicUser[]>([]);
  const [friendships, setFriendships] = useState<
    NonNullable<Awaited<ReturnType<typeof getFriendships>>>
  >([]);

  const queryClient = useQueryClient();

  const getFriendshipsQuery = useQuery({
    queryKey: ["searchUsers"],
    queryFn: () => getFriendships({ status: "ACCEPTED" }),
    onSuccess(data) {
      setFriendships(data!);

      const users = [];

      // FIXME: should push requester or recipient depending on who is logged in
      for (const friendship of data!) users.push(friendship.requester);

      setUsers(users);
    },
  });

  const deleteFriendshipMutation = useMutation({
    mutationFn: (id: number) => deleteFriendship(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["searchUsers"] });
    },
  });

  function handleDeleteClick(userId: number) {
    const friendship = friendships.find(
      (friendship) =>
        friendship.requesterId === userId || friendship.recipientId === userId
    );

    if (!friendship) return;

    deleteFriendshipMutation.mutate(friendship.id);
  }

  if (users.length === 0) return null;

  return (
    <List className="rounded-b backdrop-brightness-75">
      {users.map((user: PublicUser) => (
        <ListItem
          key={`${user.firstName}-${user.lastName}-${user.id}`}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDeleteClick(user.id)}
            >
              <MdClose color="red" />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar className="bg-orange-500">OR</Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${user.firstName} ${user.lastName}`} />
        </ListItem>
      ))}
    </List>
  );
}
