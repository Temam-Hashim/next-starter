"use client"
import Card from "@/custom/card";
import React, { useState } from "react";

function DefaultLogin() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState("");

    const handleSubmit = ({e}:{e:any}) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <DefaultLogin />
    );
  return (
    <Card>
      <Card>
        <div className="flex flex-col w-100">
          <h1 className="mb-5 border-solid border-b-2 border-cyan-100  border-r-foreground  fon-bold text-black text-center">
            Please Login to continue
          </h1>
          <div>
            <input
              className="outline-none mb-4 p-4 w-96 bg-gray-50 rounded-md border-sky-100 shadow-md"
              type="text"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <input
              className="outline-none mb-4 p-4 w-96 bg-gray-50 rounded-md border-sky-100 shadow-md"
              type="password"
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <button
              className="outline-none mb-4 p-4 w-96 bg-gray-50 rounded-md border-sky-100 shadow-md"
              onClick={(e)=>handleSubmit}
            />
          </div>
        </div>
      </Card>
    </Card>
  );
}

export default DefaultLogin;
