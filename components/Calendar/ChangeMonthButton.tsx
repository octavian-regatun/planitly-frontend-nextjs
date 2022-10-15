import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Button from "../Button";

interface Props {
  action: "previous" | "next";
}

export default function ChangeMonthButton({ action }: Props) {
  return (
    <Button className="text-white h-12 w-12 rounded-full bg-indigo-900 flex justify-center items-center">
      {action === "previous" ? (
        <FiArrowLeft size={24} />
      ) : (
        <FiArrowRight size={24} />
      )}
    </Button>
  );
}
