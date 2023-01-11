import { useAuthStore } from "../store/authStore";
import Button from "./Button";
import ProfilePicture from "./ProfilePicture";
import Text from "./Text";

export default function ProfileSectionNavbar() {
  const user = useAuthStore((x) => x.user);

  return (
    <Button className="flex items-center text-white text-end justify-center h-full rounded-lg p-4 gap-2">
      <ProfilePicture
        firstName={user!.firstName}
        lastName={user!.lastName}
        size={36}
      />
      <Text type="h5">
        {user?.firstName} {user?.lastName}
      </Text>
    </Button>
  );
}
