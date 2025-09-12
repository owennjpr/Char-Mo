"use client";
import Link from "next/link";
import React from "react";
import ShuffleText from "../components/hover_shuffle/ShuffleText";

function HoverShuffle() {
  return (
    <div className="p-4">
      <Link href={"/"} className="font-cutive">
        {"<-- Back"}
      </Link>
      <p className="font-cutive text-2xl pt-2">Individual Characters</p>
      <ShuffleText fullWords={false} text="Lorem ipsum dolor sit amet" />
      <p className="font-cutive text-2xl pt-2">Full Words</p>
      <ShuffleText
        fullWords={true}
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
      />
    </div>
  );
}

export default HoverShuffle;
