export default function Navbar() {
  return (
    <nav className="h-16 grid grid-cols-12 w-screen absolute top-0 z-10 bg-gradient-to-r from-indigo-900 to-slate-900 shadow-lg flex items-center">
      <div className="col-span-2">logo</div>
      <div className="col-span-8">links</div>
      <div className="col-span-2">profile section</div>
    </nav>
  );
}
