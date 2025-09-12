"use client";
import Link from "next/link";
import Line from "./components/random_enter/Line";
import ShuffleText from "./components/hover_shuffle/ShuffleText";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center font-cutive">
      <p className="text-2xl">Pages</p>
      <Link href={"/random_enter"}>
        <Line line="Randomized Enter" order={0} />
      </Link>
      <Link href={"/hover_shuffle"}>
        <ShuffleText text="Hover Shuffle" fullWords={true} />
      </Link>
    </div>
  );
}
