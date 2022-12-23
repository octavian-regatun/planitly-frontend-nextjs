import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { getNavbarTitle } from "../utilities/navbarUtilities";
import Logo from "./Logo";
import ProfileSectionNavbar from "./ProfileSectionNavbar";
import Text from "./Text";
import { MdSettings } from "react-icons/md";
import { MdNotifications } from "react-icons/md";

import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const navbarTitle = useMemo(
    () => getNavbarTitle(router.pathname),
    [router.pathname]
  );

  return (
    <nav className="h-16 flex justify-between w-screen absolute top-0 z-10 bg-gradient-to-r from-indigo-900 to-slate-900 shadow-lg items-center">
      <div className="col-span-3 h-full ml-4 flex items-center">
        <Logo size="lg" />
      </div>
      <div className="col-span-6 h-full flex items-center">
        <Text type="h3" className="text-white ">
          {navbarTitle}
        </Text>
      </div>
      <div className="col-span-3 h-full flex items-center text-white">
        <ProfileSectionNavbar firstName="Octavian" lastName="Regatun" />
        <Link href="settings">
          <MdSettings
            size={28}
            className="box-content p-2 hover:bg-white hover:bg-opacity-5 rounded-full"
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
