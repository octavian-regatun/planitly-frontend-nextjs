import {Tab, Tabs} from "@mui/material";
import {useState} from "react";
import Text from "../Text";
import AddFriendTab from "./AddFriendTab";
import FriendsTab from "./FriendsTab";
import RequestsTab from "./RequestsTab";

export default function Friends() {
  const [tab, setTab] = useState(0);

  return (
    <div
      className="flex flex-col flex-1 max-w-sm text-white bg-gradient-to-br from-purple-700 to-transparent rounded-3xl py-4">
      <Text type="h2" className="text-white text-center mb-4">
        Friends
      </Text>
      <Tabs
        value={tab}
        onChange={(e, value) => {
          setTab(value);
        }}
        className="mb-4"
        sx={{
          ".MuiTabs-indicator": {
            backgroundColor: "white",
          },
        }}
      >
        <Tab
          label="Friends"
          className="flex-1 text-white backdrop-brightness-50"
        />
        <Tab
          label="Requests"
          className="flex-1 text-white backdrop-brightness-50"
        />
        <Tab
          label="Add friend"
          className="flex-1 text-white backdrop-brightness-50"
        />
      </Tabs>
      {tab === 0 && <FriendsTab/>}
      {tab === 1 && <RequestsTab/>}
      {tab === 2 && <AddFriendTab/>}
    </div>
  );
}
