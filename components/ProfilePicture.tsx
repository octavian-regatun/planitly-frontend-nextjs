import { Avatar } from "@mui/material";
import { useEffect, useRef } from "react";
import textFit from "textfit";

interface Props {
  firstName: string;
  lastName: string;
  size: number;
}

export default function ProfilePicture({ firstName, lastName, size }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) textFit(ref.current);
  }, [ref]);

  return (
    <Avatar
      ref={ref}
      className="bg-orange-600 rounded-full flex items-center justify-center p-2"
      style={{ width: size, height: size }}
    >
      {firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()}
    </Avatar>
  );
}
