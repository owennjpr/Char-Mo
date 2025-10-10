"use client";
import React from "react";
import HoverSweep from "../components/effects/HoverSweep";
import LinkButton from "../components/LinkButton";

function page() {
  return (
    <div className="p-4 font-cutive">
      <LinkButton path="/" back={true}>
        Back to Home
      </LinkButton>
      <p className="text-2xl pt-2">Command Line Sweep (40ms)</p>
      <HoverSweep delay={40}>Lorem ipsum dolor sit amet</HoverSweep>
    </div>
  );
}

export default page;
