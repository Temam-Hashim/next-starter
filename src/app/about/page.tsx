import React from "react";


export const metadata = {
    title: "About Page",
    description: "About Page",
    keywords: "About Page",
}

function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black border border-white p-3">
      <div className="flex flex-col bg-gray-50 w-1/2  h-1/4 md:w-1/3 text-black p-2 justify-center items-center ">
        <h1 className="p-3 font-bold text-xl">About Page</h1>
      </div>
    </div>
  );
}

export default About;
