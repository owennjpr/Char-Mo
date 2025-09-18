"use client";
import React from "react";
import HoverSweep from "../components/effects/HoverSweep";
import LinkButton from "../components/LinkButton";

function page() {
  return (
    <div className="p-4">
      <LinkButton path="/" back={true}>
        Back to Home
      </LinkButton>
      <p className="font-cutive text-2xl pt-2">Hover Sweep</p>
      <HoverSweep text="Lorem ipsum dolor sit amet" />
    </div>
  );
}

export default page;
