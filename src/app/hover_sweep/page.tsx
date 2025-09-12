"use client";
import Link from "next/link";
import React from "react";
import HoverSweep from "../components/hover_sweep/HoverSweep";

function page() {
  return (
    <div className="p-4 w-1/2">
      <Link href={"/"} className="font-cutive">
        {"Back to Home"}
      </Link>
      <p className="font-cutive text-2xl pt-2">Hover Sweep</p>
      <HoverSweep text="Lorem ipsum dolor sit amet" />
    </div>
  );
}

export default page;
