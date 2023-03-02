import Image from "next/image";

type Size = "sm" | "md" | "lg" | "xl";

interface Props {
  size: Size;
}

export default function Logo({size}: Props) {
  return (
    <Image
      src="/logo.svg"
      alt="logo"
      height={getPixelsSize(size)}
      width={getPixelsSize(size)}
    />
  );
}

function getPixelsSize(size: Size) {
  switch (size) {
    case "sm":
      return 16;
    case "md":
      return 32;
    case "lg":
      return 48;
    case "xl":
      return 64;
  }
}
