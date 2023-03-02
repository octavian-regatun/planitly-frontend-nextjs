import { Modal } from "@mui/material"
import { useRef, useState } from "react"
import CreateNewEventPopover from "../CreateNewEventPopup"

interface Props {
  day: Date
  isCurrentMonth: boolean
}

export default function DayCell({ day, isCurrentMonth }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const anchorEl = useRef(null)

  function getTextColor() {
    return isCurrentMonth ? "text-white" : "text-gray-500"
  }

  function openPopup() {
    setIsPopupOpen(true)
  }

  function closePopup() {
    setIsPopupOpen(false)
  }

  return (
    <>
      <div
        ref={anchorEl}
        className={`text-center ${getTextColor()} p-2 hover:backdrop-brightness-75 ${
          isCurrentMonth ? "hover:cursor-pointer" : "pointer-events-none"
        } `}
        onClick={openPopup}
      >
        {day.getDate()}
      </div>
      <Modal open={isPopupOpen} onClose={closePopup}>
        <div className="flex h-screen justify-center overflow-auto p-4 backdrop-blur">
          <CreateNewEventPopover />
        </div>
      </Modal>
    </>
  )
}
