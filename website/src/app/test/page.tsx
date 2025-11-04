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
      <p>{mode ? "abra" : "hocus pocus"}</p>
      <TxtDev
        enter={{ type: "randomized" }}
        hover={{ type: "shuffle" }}
        // morph={{ type: "retype" }}
      >
        {mode ? "abra" : "hocus pocus"}
      </TxtDev>
      <TxtDev
        enter={{ type: "typed sweep", options: { startDelay: 0 } }}
        hover={{ type: "cursor sweep", options: { rate: 100 } }}
      >
        Hiiiii
      </TxtDev>
      <TxtDev
        enter={{ type: "typed sweep", options: { startDelay: 1000 } }}
        hover={{ type: "shuffle" }}
      >
        Hiiiii Byeeeeeeee
      </TxtDev>
      <TxtDev enter={{ type: "typed sweep", options: { startDelay: 2000 } }}>
        Hiiiii
      </TxtDev>
    </div>
  );
}

export default Test;
