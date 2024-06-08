"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Orders() {
  const router = useRouter();

  const placeOrder = () => {
    console.log("Order Placed");
    router.push("/");
  };
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="bg-white h-1/4 w-1/4 flex flex-col items-center justify-center">
        <h1 className="text-center text-bold text-xl p-2">Orders Page</h1>
        <button className="text-blue-500 bg-slate-200 p-2 m-2 rounded-md hover:text-blue-600 hover:bg-slate-300" onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Orders;
