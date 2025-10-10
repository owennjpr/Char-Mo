"use client";
import React, { useState } from "react";
import Randomized2Step from "../components/effects/Randomized2Step";
import LinkButton from "../components/LinkButton";
import NumberInput from "../components/NumberInput";
function RandomEnter() {
  const [delay, setDelay] = useState<number>(1000);

  return (
    <div className="p-4 font-cutive">
      <LinkButton path="/" back={true}>
        Back to Home
      </LinkButton>
      <div className="pb-6">
        <p className="text-2xl pt-2">Individual Lines</p>
        <Randomized2Step>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Randomized2Step>
      </div>
      <div>
        <div className="flex items-center">
          <p className="font-cutive text-2xl pt-2">Full Paragraph (</p>
          <NumberInput
            state={delay}
            setState={setDelay}
            digits={4}
            min={100}
            max={9999}
          />
          <p className="font-cutive text-2xl pt-2 pl-1">ms)</p>
        </div>

        <Randomized2Step maxDelay={delay}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Randomized2Step>
      </div>
    </div>
  );
}

export default RandomEnter;
