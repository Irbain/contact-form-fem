"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className="bg-green-200 w-full h-screen flex items-center justify-center">
        <section
          className="bg-white w-1/2 h-auto p-[3%]
      flex flex-col justify-between px-5 rounded-md"
        >
          <h1 className="text-center text-green-600 cursor-default text-2xl max-[400px]:text-3xl max-[600px]:text-4xl">
            Join Our Teams Today
          </h1>
          <div>And Create Some Awseome Applications For Your Future Career</div>
          <button
            type="button"
            onClick={() => router.replace("/Contact-Form")}
            className="bg-green-600 h-8 text-white rounded-md 
        active:bg-red
        "
          >
            Join Us
          </button>
        </section>
      </div>
    </div>
  );
}
