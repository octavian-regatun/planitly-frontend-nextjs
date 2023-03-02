import BarLoader from "react-spinners/BarLoader";

export default function FullScreenLoader() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-indigo-900 to-slate-900">
      <BarLoader height={8} width={200} color="#ffffff"/>
    </div>
  );
}
