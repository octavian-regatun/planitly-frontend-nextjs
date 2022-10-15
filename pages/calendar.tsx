import Head from "next/head";
import Calendar from "../components/Calendar/Calendar";
import Layout from "../components/Layout";
import RequireAuth from "../components/RequireAuth";
import useDefaultPageStyles from "../utilities/hooks/useDefaultPageStyles";

export default function CalendarPage() {
  return (
    <>
      <Head>
        <title>PlanITLY - Calendar</title>
      </Head>
      <RequireAuth>
        <Layout>
          <div className={`${useDefaultPageStyles()}`}>
            <div className="col-span-8">
              <Calendar />
            </div>
          </div>
        </Layout>
      </RequireAuth>
    </>
  );
}
