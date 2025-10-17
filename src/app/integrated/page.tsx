"use client";
import React from "react";
import Txt from "../components/Txt";

function page() {
  return (
    <div className="font-cutive p-4">
      <Txt
        enter={{
          type: "number sweep",
        }}
      >
        oh hello i am implementing a text library rn
      </Txt>
    </div>
  );
}

export default page;
