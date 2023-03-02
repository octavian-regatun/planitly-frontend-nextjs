import {List, ListItem, ListItemAvatar, ListItemText, Skeleton,} from "@mui/material";

export default function LoadingFriends() {
  return (
    <>
      {[...Array(3)].map((value, index) => (
        <List
          className="rounded-b backdrop-brightness-75"
          key={`loading-friend-${index}`}
        >
          <ListItem>
            <ListItemAvatar>
              <Skeleton
                variant="circular"
                height={40}
                width={40}
                animation="wave"
              />
            </ListItemAvatar>
            <ListItemText>
              <Skeleton
                variant="text"
                height={40}
                width="75%"
                animation="wave"
              />
            </ListItemText>
          </ListItem>
        </List>
      ))}
    </>
  );
}
