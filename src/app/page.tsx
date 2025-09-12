"use client";
import Link from "next/link";
import Line from "./components/random_enter/Line";
import ShuffleText from "./components/hover_shuffle/ShuffleText";
import HoverSweep from "./components/hover_sweep/HoverSweep";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center font-cutive">
      <div className="">
        <p className="text-2xl">Text Animations</p>
        <div className="pl-2">
          <Link href={"/random_enter"}>
            <Line line="Randomized Enter" order={0} />
          </Link>
          <Link href={"/hover_shuffle"}>
            <ShuffleText text="Hover Shuffle" fullWords={true} />
          </Link>
          <Link href={"/hover_sweep"}>
            <HoverSweep text="Hover Sweep" />
          </Link>
        </div>
      </div>
    </div>
  );
}
