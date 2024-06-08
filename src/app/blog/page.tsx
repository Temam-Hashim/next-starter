import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata:Metadata = {
  // title:"Blog"
  title:{
    absolute:"Blog"
  }
}

function Blog() {
  const  bId = 3;
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <ul className="bg-white p-8 w-1/3 text-center">
        <h1 className="text-center text-bold text-xl p-2">Blog Page</h1>
        <li className="text-cyan-500 bg-gray-200 border-r-16 p-2 m-2 font-bold hover:text-blue-400 cursor-pointer">
          <Link href={"/blog/1"}>Blog 1</Link>
        </li>
        <li className="text-cyan-500 bg-gray-200 border-r-16 p-2 m-2 font-bold hover:text-blue-400 cursor-pointer">
          <Link href="/blog/2">Blog 2</Link>
        </li>
        <li className="text-cyan-500 bg-gray-200 border-r-16 p-2 m-2 font-bold hover:text-blue-400 cursor-pointer">
          <Link href={`/blog/${bId}`}>Blog {bId}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
