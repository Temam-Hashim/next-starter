import React from 'react'
import { Progress } from "@/components/ui/progress";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";


function Loading() {
  return (
    <div>
      <progress value={50} />
      <Toaster />
      {/* toast("Event has been created.") */}
    </div>
  );
}

export default Loading;
