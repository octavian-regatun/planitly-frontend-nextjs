import DashboardContent from "../components/DashboardContent";
import Layout from "../components/Layout";
import RequireAuth from "../components/RequireAuth";

export default function DashboardPage() {
  return (
    <RequireAuth>
      <Layout>
        <div className="w-full h-full grid grid-cols-12 bg-gradient-to-r from-indigo-900 to-slate-900">
          <DashboardContent />
        </div>
      </Layout>
    </RequireAuth>
  );
}
