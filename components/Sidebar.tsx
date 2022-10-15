import Link from "next/link";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineDashboard, MdPeople } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="w-16 pt-16 h-screen absolute bg-indigo-900 shadow-2xl flex flex-col justify-center items-center ">
      <Link href="dashboard">
        <a className="hover:backdrop-brightness-75 rounded-md text-3xl text-white w-16 h-16 flex flex-col justify-center items-center ">
          <MdOutlineDashboard />
        </a>
      </Link>
      <Link href="calendar">
        <a className="hover:backdrop-brightness-75 rounded-md text-3xl text-white w-16 h-16 flex flex-col justify-center items-center ">
          <FiCalendar />
        </a>
      </Link>
      <a className="hover:backdrop-brightness-75 rounded-md text-3xl text-white w-16 h-16 flex flex-col justify-center items-center ">
        <MdPeople />
      </a>
    </div>
  );
}
