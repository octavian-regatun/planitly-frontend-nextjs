import type { NextPage } from "next";
import Head from "next/head";
import GoogleLoginCard from "../components/GoogleLoginCard";
import Typewriter from "typewriter-effect";

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
          <div className="w-full text-xl md:text-7xl text-center text-white">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Its now easier than ever to <br/>")
                  .typeString(
                    "<span class='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>organize events for everyone</span>"
                  )
                  .pauseFor(2500)
                  .deleteChars(28)
                  .typeString(
                    "<span class='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>plan a new trip with your friends</span>"
                  )
                  .pauseFor(2500)
                  .deleteChars(33)
                  .typeString(
                    "<span class='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>think about your future excursions</span>"
                  )
                  .pauseFor(2500)
                  .deleteChars(34)
                  .start();
              }}
            />
          </div>
        </div>
        <div className="flex-1 h-full flex justify-center items-center col-span-12 md:col-span-3">
          <GoogleLoginCard />
        </div>
      </div>
    </>
  );
};

export default Home;
