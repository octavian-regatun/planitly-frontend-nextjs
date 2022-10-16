import { Modal, Popover } from "@mui/material";
import { useRef, useState } from "react";
import CreateNewEventPopover from "../CreateNewEventPopup";

interface Props {
  day: Date;
  isCurrentMonth: boolean;
}

export default function DayCell({ day, isCurrentMonth }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const anchorEl = useRef(null);

  function getTextColor() {
    return isCurrentMonth ? "text-white" : "text-gray-500";
  }

  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
      <div
        ref={anchorEl}
        className={`text-center ${getTextColor()} p-2 hover:backdrop-brightness-75`}
        onClick={openPopup}
      >
        {day.getDate()}
      </div>
      <Modal open={isPopupOpen} onClose={closePopup}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <CreateNewEventPopover />
        </div>
      </Modal>
    </>
  );
}
