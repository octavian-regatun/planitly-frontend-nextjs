import Head from "next/head";
import DashboardContent from "../components/DashboardContent";
import Layout from "../components/Layout";
import RequireAuth from "../components/RequireAuth";

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>PlanITLY - Dashboard</title>
      </Head>
      <RequireAuth>
        <Layout>
          <div className="grid h-full w-full grid-cols-12 bg-gradient-to-r from-indigo-900 to-slate-900 p-8">
            <DashboardContent />
          </div>
        </Layout>
      </RequireAuth>
    </>
  );
}
