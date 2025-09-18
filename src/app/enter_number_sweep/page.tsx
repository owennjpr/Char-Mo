"use client";
import React from "react";
import LinkButton from "../components/LinkButton";
import CounterSweep from "../components/effects/CounterSweep";

function Page() {
  return (
    <div className="p-4">
      <LinkButton path="/" back={true}>
        Back to Home
      </LinkButton>
      <p className="font-cutive text-2xl pt-2">
        Number Sweep (50ms, 4 cycles per digit)
      </p>
      <CounterSweep text="123456789" delay={50} cyclesPerDigit={4} />
      <p className="font-cutive text-2xl pt-2">
        Number Sweep (80ms, 2 cycles per digit)
      </p>
      <CounterSweep text="12345678901234567890" delay={80} cyclesPerDigit={2} />
    </div>
  );
}

export default Page;
