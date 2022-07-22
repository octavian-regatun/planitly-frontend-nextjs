import Button from "./Button";
import ProfilePicture from "./ProfilePicture";
import Text from "./Text";

export default function ProfileSectionNavbar({ firstName, lastName }: Props) {
  return (
    <Button className="flex items-center text-white text-end justify-center h-full rounded-lg p-4 gap-2">
      <ProfilePicture firstName={firstName} lastName={lastName} />
      <Text type="h5">
        {firstName} {lastName}
      </Text>
    </Button>
  );
}

interface Props {
  firstName: string;
  lastName: string;
  profilePicture?: string;
}
