"use client";
import React from "react";
import ShuffleText from "@/components/effects/ShuffleText";
import LinkButton from "@/components/LinkButton";

function HoverShuffle() {
  return (
    <div className="font-cutive p-4">
      <LinkButton path="/gallery">Back</LinkButton>
      <p className="text-2xl pt-2">Individual Characters</p>
      <ShuffleText fullWords={false}>Lorem ipsum dolor sit amet</ShuffleText>
      <p className="text-2xl pt-2">Full Words</p>
      <ShuffleText fullWords={true}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </ShuffleText>
    </div>
  );
}

export default HoverShuffle;
