import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import Text from "../Text";

export default function Friends() {
  const whiteTextFieldStyles = {
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  };

  return (
    <div className="flex flex-col flex-1 max-w-sm">
      <Text type="h2" className="text-white text-center mb-4">
        Friends
      </Text>
      <TextField
        variant="outlined"
        label="Search user"
        fullWidth
        sx={whiteTextFieldStyles}
      />
      <List className="rounded text-white bg-gradient-to-br from-purple-700 to-transparent">
        <ListItem>
          <ListItemAvatar>
            <Avatar className="bg-orange-500">OR</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Octavian Regatun" />
        </ListItem>
      </List>
    </div>
  );
}
