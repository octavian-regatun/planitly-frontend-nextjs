import type { NextPage } from "next";
import Head from "next/head";
import GoogleLoginCard from "../components/GoogleLoginCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PlanITLY - Home</title>
      </Head>
      <div className="h-screen w-screen grid grid-cols-12 bg-gradient-to-r from-indigo-900 to-slate-900">
        <div className="col-span-12 md:col-span-9 flex flex-col flex-1 justify-center px-4 md:px-24 items-center">
          <h1 className="w-fit text-7xl md:text-9xl text-center mb-24 text-white  ">
            PlanITLY
          </h1>
          <h1 className="w-full text-xl md:text-7xl text-center text-white">
            Its now easier than ever to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              organize events for everyone
            </span>
          </h1>
        </div>
        <div className="flex-1 h-full flex justify-center items-center col-span-12 md:col-span-3">
          <GoogleLoginCard />
        </div>
      </div>
    </>
  );
};

export default Home;
