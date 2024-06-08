import Card from "@/custom/card";
import Link from "next/link";
import React from "react";

function DefaultNotification() {
  return (
    <Card>
      Notification
      <br />
      <button className="bg-cyan-500 p-2 text-white hover:bg-cyan-600 rounded-md ml-2">
        <Link href="/dashboard/archived">Archived</Link>
      </button>
    </Card>
  );
}

export default DefaultNotification;
