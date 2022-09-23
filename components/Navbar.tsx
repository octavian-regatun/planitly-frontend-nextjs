import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { getNavbarTitle } from "../utilities/navbarUtilities";
import Logo from "./Logo";
import ProfileSectionNavbar from "./ProfileSectionNavbar";
import Text from "./Text";

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
      <div className="col-span-3 h-full">
        <ProfileSectionNavbar firstName="Octavian" lastName="Regatun" />
      </div>
    </nav>
  );
}
