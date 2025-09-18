"use client";
import Randomized2Step from "./components/effects/Randomized2Step";
import ShuffleText from "./components/effects/ShuffleText";
import HoverSweep from "./components/effects/HoverSweep";
import LinkButton from "./components/LinkButton";
import { motion } from "motion/react";
import { useState } from "react";
import TypedSweep from "./components/effects/TypedSweep";
import CounterSweep from "./components/effects/CounterSweep";

export default function Home() {
  const [refresh, setRefresh] = useState<number>(0);
  return (
    <div className="h-screen p-4 font-cutive flex flex-col justify-between">
      <div>
        <p className="text-2xl opacity-25">Dynamic Text Animations</p>
        <p className="pl-4 pb-4">
          this is a collection of text/letter replacement based animations built
          in react. click an effect to see more examples of its use as well as
          code snippets.
        </p>
        <p className="text-2xl opacity-25">Effects</p>

        <div className="pl-4">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-xl opacity-50">Enters</p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-clockwise opacity-50 cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => setRefresh((r) => r + 1)}
              animate={{ rotateZ: 360 * refresh }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </motion.svg>
          </div>
          <div className="pl-4">
            <LinkButton
              key={"2step" + refresh}
              path="/enter_random"
              back={false}
            >
              <Randomized2Step text="2 Step Randomized" order={0} />
            </LinkButton>
            <LinkButton
              key={"typed" + refresh}
              path="/enter_typed_sweep"
              back={false}
            >
              <TypedSweep text="Typed Sweep" delay={40} />
            </LinkButton>
            <LinkButton
              key={"number" + refresh}
              path="/enter_number_sweep"
              back={false}
            >
              <CounterSweep text="Number Sweep" delay={40} cyclesPerDigit={3} />
            </LinkButton>
          </div>
          <p className="text-xl opacity-50">Hovers</p>
          <div className="pl-4">
            <LinkButton path="/hover_shuffle" back={false}>
              <ShuffleText text="Word Shuffle" fullWords={true} />
            </LinkButton>
            <LinkButton path="/hover_sweep" back={false}>
              <HoverSweep text="Command Line Sweep" />
            </LinkButton>
          </div>
          <p className="text-xl opacity-50">Exits</p>
          <div className="pl-4"></div>
        </div>
        <div className="pl-2"></div>
      </div>
      <div className="flex flex-row gap-2">
        <p className="opacity-50">
          Created by <a href="https://github.com/owennjpr">Owen Prendergast</a>
        </p>
      </div>
    </div>
  );
}
