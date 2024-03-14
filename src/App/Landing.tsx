import { useState } from "react";
import { Button } from "../components/ui/button";
import NavBar from "@/components/NavBar";

export default function Landing() {
  const [text, setText] = useState("Nice");

  return (
    <div className="bg-white">
      <NavBar />
      <div />
      <div className="bg-white"></div>
      

      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="mb-5 font-bold tracking-tight text-gray-900 text-7xl">
              welcome!
            </h1>
            <h1 className="mb-10 text-5xl font-bold tracking-tight text-gray-900">
              dicover my portfolio, a journey of reflection and growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to my best self portfolio! This project is an
              introspective journey aimed at my personal and leadership growth.
              This website serves as a platform where you can discover my
              journey to unearth moments where I was at my best. I intend to
              provide transparent yet structured reflection of my authentic
              personal development journey.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <Button
                className="font-semibold text-white bg-indigo-800 rounded hover:bg-blue-950"
                onClick={() => setText(text + "!")}
              >
                {text}
              </Button>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Begin <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
