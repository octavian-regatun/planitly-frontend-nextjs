import Logo from "./Logo";
import ProfileSectionNavbar from "./ProfileSectionNavbar";
import Text from "./Text";

export default function Navbar() {
  return (
    <nav className="h-16 flex justify-between w-screen absolute top-0 z-10 bg-gradient-to-r from-indigo-900 to-slate-900 shadow-lg items-center">
      <div className="col-span-3 h-full ml-4 flex items-center">
        <Logo size="lg" />
      </div>
      <div className="col-span-6 h-full flex items-center">
        <Text type="h3" className="text-white ">
          Page Title
        </Text>
      </div>
      <div className="col-span-3 h-full">
        <ProfileSectionNavbar firstName="Octavian" lastName="Regatun" />
      </div>
    </nav>
  );
}
