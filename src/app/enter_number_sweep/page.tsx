"use client";
import React, { useState } from "react";
import LinkButton from "../components/LinkButton";
import NumberSweep from "../components/effects/NumberSweep";
import NumberInput from "../components/NumberInput";

function Page() {
  const [delay, setDelay] = useState<number>(80);
  const [cpd, setCpd] = useState<number>(2);
  return (
    <div className="p-4">
      <LinkButton path="/" back={true}>
        Back to Home
      </LinkButton>
      <p className="font-cutive text-2xl pt-2">
        Number Sweep (50ms, 4 cycles per digit)
      </p>
      <NumberSweep text="123456789" delay={50} cyclesPerDigit={4} />
      <div className="flex items-center">
        <p className="font-cutive text-2xl pt-2">Number Sweep (</p>
        <NumberInput state={delay} setState={setDelay} />
        <p className="font-cutive text-2xl pt-2 pr-2">ms, </p>
        <NumberInput
          state={cpd}
          setState={setCpd}
          min={0}
          max={20}
          digits={2}
        />

        <p className="font-cutive text-2xl pt-2 pl-2">cycles per digit)</p>
      </div>
      <NumberSweep
        text="12345678901234567890"
        delay={delay}
        cyclesPerDigit={cpd}
      />
    </div>
  );
}

export default Page;
