import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-black border border-white">
        <div className="flex flex-col bg-gray-50 w-1/3 h-1/4 text-black p-2 justify-center items-center">
          <h1 className="p-3 font-bold text-xl">Welcome Home</h1>
          <div>
            <ul className="flex p-2 ">
              <li className="mx-2 text-cyan-500 font-bold">
                <Link href="/about">About</Link>
              </li>
              <li className="mx-2 text-cyan-500 font-bold">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="mx-2 text-cyan-500 font-bold">
                <Link href="/login">Login</Link>
              </li>
              <li className="mx-2 text-cyan-500 font-bold">
                <Link href="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
