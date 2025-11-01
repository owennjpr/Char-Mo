"use client";
import { TxtDev } from "@/components/TxtDev";
import React, { useState } from "react";

function Test() {
  const [mode, setMode] = useState<boolean>(true);
  return (
    <div className="w-full flex flex-col items-center font-cutive p-4">
      <button
        onClick={() => {
          setMode(!mode);
        }}
        className="border-2 border-green-400"
      >
        swap
      </button>
      <p>{mode ? "abracadabra" : "hocus pocus"}</p>
      <TxtDev enter={{ type: "typed sweep" }}>
        {mode ? "abracadabra" : "hocus pocus"}
      </TxtDev>
      <TxtDev enter={{ type: "typed sweep", options: { startDelay: 0 } }}>
        Hiiiii
      </TxtDev>
      <TxtDev enter={{ type: "typed sweep", options: { startDelay: 1000 } }}>
        Hiiiii
      </TxtDev>
      <TxtDev enter={{ type: "typed sweep", options: { startDelay: 2000 } }}>
        Hiiiii
      </TxtDev>
    </div>
  );
}

export default Test;
