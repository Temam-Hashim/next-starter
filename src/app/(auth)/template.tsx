"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  const pathname = usePathname();
  const [input, setInput] = useState("");

  const navLinks = [
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Register",
      href: "/register",
    },
    {
      name: "Forgot Password",
      href: "/forgot-password",
    },
  ];
  return (
    <div>
      <div>
        <div className="w-100 bg-gray-300 p-2 m-2">
          <input className="outline-none p-2 rounded-md" type="text" value={input} onChange={e=>setInput(e.target.value)}  />
        </div>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
        
          return (
            <button
              className={
                isActive ? "font-bold mr-2 p-2" : "text-blue-500 mr-2 p-2"
              }
            >
              <Link href={link.href}>{link.name}</Link>
            </button>
          );
        })}
      </div>

      {children}
    </div>
  );
}
