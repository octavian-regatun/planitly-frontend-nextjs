import Head from "next/head";
import Layout from "../components/Layout";
import RequireAuth from "../components/RequireAuth";
import Friends from "../components/SocialPage/Friends";

export default function SocialPage() {
  return (
    <>
      <Head>
        <title>PlanITLY - Social</title>
      </Head>
      <RequireAuth>
        <Layout>
          <div className="w-full h-full grid grid-cols-12 bg-gradient-to-r from-indigo-900 to-slate-900 p-8">
            <div className="col-span-6 flex justify-center">
              <Friends/>
            </div>
          </div>
        </Layout>
      </RequireAuth>
    </>
  );
}
