import ProfileSectionNavbar from "./ProfileSectionNavbar";

export default function Navbar() {
  return (
    <nav className="h-16 flex justify-between w-screen absolute top-0 z-10 bg-gradient-to-r from-indigo-900 to-slate-900 shadow-lg items-center">
      <div className="col-span-3 h-full">logo</div>
      <div className="col-span-6 h-full">links</div>
      <div className="col-span-3 h-full">
        <ProfileSectionNavbar firstName="Octavian" lastName="Regatun" />
      </div>
    </nav>
  );
}
