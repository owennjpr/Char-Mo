"use client";
import React, { useState } from "react";
import LinkButton from "../components/LinkButton";
import TypedSweep from "../components/effects/TypedSweep";
import NumberInput from "../components/NumberInput";

function Page() {
  const [delay, setDelay] = useState<number>(10);
  return (
    <div className="p-4">
      <LinkButton path="/" back={true}>
        Back to Home
      </LinkButton>
      <p className="font-cutive text-2xl pt-2">Typed Sweep (40ms)</p>
      <TypedSweep text="Lorem ipsum dolor sit amet" delay={40} />
      <div className="flex items-center">
        <p className="font-cutive text-2xl pt-2">Typed Sweep (</p>
        <NumberInput state={delay} setState={setDelay} />
        <p className="font-cutive text-2xl pt-2 pl-1">ms)</p>
      </div>
      <TypedSweep
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        delay={delay}
      />
    </div>
  );
}

export default Page;
