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
      <div className="grid h-screen w-screen grid-cols-12 bg-gradient-to-r from-indigo-900 to-slate-900">
        <div className="col-span-12 flex flex-1 flex-col items-center justify-center px-4 md:col-span-9 md:px-24">
          <h1 className="mb-24 w-fit text-center text-7xl text-white md:text-9xl  ">
            PlanITLY
          </h1>
          <div className="w-full text-center text-xl text-white md:text-7xl">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("It's now easier than ever to <br/>")
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
        <div className="col-span-12 flex h-full flex-1 items-center justify-center md:col-span-3">
          <GoogleLoginCard />
        </div>
      </div>
    </>
  );
};

export default Home;
