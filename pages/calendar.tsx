import Head from "next/head";
import Calendar from "../components/Calendar/Calendar";
import EventList from "../components/EventList";
import Layout from "../components/Layout";
import RequireAuth from "../components/RequireAuth";

export default function CalendarPage() {
  return (
    <>
      <Head>
        <title>PlanITLY - Calendar</title>
      </Head>
      <RequireAuth>
        <Layout>
          <div
            className={`h-full bg-gradient-to-r from-indigo-900 to-slate-900 w-full grid grid-cols-12 p-8 gap-4`}
          >
            <div className="col-span-8">
              <Calendar />
            </div>
            <div className="col-span-4 overflow-auto scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-2">
              <EventList />
            </div>
          </div>
        </Layout>
      </RequireAuth>
    </>
  );
}
