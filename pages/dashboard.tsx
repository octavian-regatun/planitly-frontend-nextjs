import DashboardContent from "../components/DashboardContent";

export default function DashboardPage() {
  return (
    <div className="w-full h-full grid grid-cols-12 bg-gradient-to-r from-indigo-900 to-slate-900">
      <DashboardContent />
    </div>
  );
}
