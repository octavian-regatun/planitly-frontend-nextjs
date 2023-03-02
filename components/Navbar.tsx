import {useRouter} from "next/router";
import {useMemo} from "react";
import {MdNotifications, MdSettings} from "react-icons/md";
import {getNavbarTitle} from "../utilities/navbarUtilities";
import Logo from "./Logo";
import ProfileSectionNavbar from "./ProfileSectionNavbar";
import Text from "./Text";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const navbarTitle = useMemo(
    () => getNavbarTitle(router.pathname),
    [router.pathname]
  );

  return (
    <nav
      className="h-16 flex justify-between w-screen absolute top-0 z-10 bg-gradient-to-r from-indigo-900 to-slate-900 shadow-lg items-center">
      <div className="col-span-3 h-full ml-4 flex items-center">
        <Link href="/dashboard">
          <a>
            <Logo size="lg"/>
          </a>
        </Link>
      </div>
      <div className="col-span-6 h-full flex items-center">
        <Text type="h3" className="text-white ">
          {navbarTitle}
        </Text>
      </div>
      <div className="col-span-3 h-full flex items-center text-white">
        <ProfileSectionNavbar/>
        <Link href="/settings">
          <MdSettings
            size={28}
            className="box-content p-2 hover:bg-white hover:bg-opacity-5 rounded-full cursor-pointer"
          />
        </Link>
        <button>
          <MdNotifications
            size={28}
            className="box-content p-2 hover:bg-white hover:bg-opacity-5 rounded-full"
          />
        </button>
      </div>
    </nav>
  );
}
