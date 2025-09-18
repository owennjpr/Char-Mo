"use client";
import React from "react";
import Randomized2Step from "../components/effects/Randomized2Step";
import LinkButton from "../components/LinkButton";
function RandomEnter() {
  return (
    <div className="p-4">
      <LinkButton path="/" back={true}>
        Back to Home
      </LinkButton>
      <div className="pb-6">
        <p className="font-cutive text-2xl pt-2">Individual Lines</p>
        <Randomized2Step
          order={0}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        />
        <Randomized2Step
          order={2}
          text="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Randomized2Step order={1} text="Ut enim ad minim veniam," />
        <Randomized2Step
          order={1}
          text="quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      <div>
        <p className="font-cutive text-2xl">Full Paragraph</p>
        <Randomized2Step
          order={0}
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        />
      </div>
    </div>
  );
}

export default RandomEnter;
