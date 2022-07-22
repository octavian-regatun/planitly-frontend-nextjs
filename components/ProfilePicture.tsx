export default function ProfilePicture({ firstName, lastName }: Props) {
  return (
    <div className="bg-orange-600 rounded-full flex items-center justify-center p-2">
      {firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()}
    </div>
  );
}

interface Props {
  firstName: string;
  lastName: string;
}
