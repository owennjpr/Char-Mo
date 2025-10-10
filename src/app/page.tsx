"use client";
import Randomized2Step from "./components/effects/Randomized2Step";
import ShuffleText from "./components/effects/ShuffleText";
import HoverSweep from "./components/effects/HoverSweep";
import LinkButton from "./components/LinkButton";
import { motion } from "motion/react";
import { useState } from "react";
import TypedSweep from "./components/effects/TypedSweep";
import NumberSweep from "./components/effects/NumberSweep";

export default function Home() {
  const [refresh, setRefresh] = useState<number>(0);
  return (
    <div className="h-screen p-4 font-cutive flex flex-col justify-between">
      <div>
        <p className="text-2xl opacity-25">Dynamic Text Animations</p>
        <p className="pl-4 pb-4">
          this is a collection of text/letter replacement based animations built
          with react, typescript, and a little bit of tailwind. click an effect
          to see more examples of its use as well as code snippets.
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
              <Randomized2Step>2 Step Randomized</Randomized2Step>
            </LinkButton>
            <LinkButton
              key={"typed" + refresh}
              path="/enter_typed_sweep"
              back={false}
            >
              <TypedSweep delay={40}>Typed Sweep</TypedSweep>
            </LinkButton>
            <LinkButton
              key={"number" + refresh}
              path="/enter_number_sweep"
              back={false}
            >
              <NumberSweep delay={40} cyclesPerDigit={3}>
                Number Sweep
              </NumberSweep>
            </LinkButton>
          </div>
          <p className="text-xl opacity-50">Hovers</p>
          <div className="pl-4">
            <LinkButton path="/hover_shuffle" back={false}>
              <ShuffleText fullWords={true}>Word Shuffle</ShuffleText>
            </LinkButton>
            <LinkButton path="/hover_sweep" back={false}>
              <HoverSweep>Command Line Sweep</HoverSweep>
            </LinkButton>
          </div>
          <p className="text-xl opacity-50">Exits</p>
          <div className="pl-4"></div>
        </div>
        <div className="pl-2"></div>
      </div>
      <div className="flex flex-row gap-2 items-center opacity-50">
        <a href="https://github.com/owennjpr">
          <svg
            width="24"
            height="24"
            viewBox="0 0 98 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="#fff"
            />
          </svg>
        </a>
        <TypedSweep delay={50}>Created by Owen Prendergast</TypedSweep>
      </div>
    </div>
  );
}
