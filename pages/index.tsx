import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import GoogleLoginCard from "../components/GoogleLoginCard";

const Home: NextPage = () => {
  useEffect(()=>{
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
  },[])
  return (
    <>
      <Head>
        <title>PlanITLY - Home</title>
      </Head>
      <div className="h-screen w-screen grid grid-cols-12 bg-gradient-to-r from-indigo-900 to-slate-900">
        <div className="flex flex-col flex-1 col-span-9 justify-center px-24 items-center">
          <h1 className="w-fit text-9xl text-center mb-24 text-white  ">
            PlanITLY
          </h1>
          <h1 className="w-fit text-7xl text-center text-white">
            Its now easier than ever to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              organize events for everyone
            </span>
          </h1>
        </div>
        <div className="flex-1 h-full flex justify-center items-center col-span-3">
          <GoogleLoginCard />
        </div>
      </div>
    </>
  );
};

export default Home;
