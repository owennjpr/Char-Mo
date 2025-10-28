"use client";
import React, { useState } from "react";
import Randomized2Step from "@/components/effects/Randomized2Step";
import ShuffleText from "@/components/effects/ShuffleText";
import HoverSweep from "@/components/effects/HoverSweep";
import TypedSweep from "@/components/effects/TypedSweep";
import NumberSweep from "@/components/effects/NumberSweep";
import { Txt } from "@char-mo/react";
import LinkButton from "@/components/LinkButton";
import RefreshButton from "@/components/RefreshButton";

function Gallery() {
  const [refresh, setRefresh] = useState<number>(0);

  return (
    <div className="w-full h-screen flex flex-col items-center font-cutive">
      <div className="pt-4">
        <LinkButton path="/">
          <Txt enter={{ type: "typed sweep" }} className="text-lg">
            {"[ back ]"}
          </Txt>
        </LinkButton>
      </div>
      <div className="w-full h-5/6 flex flex-col gap-4 justify-center items-center">
        <Txt
          enter={{
            type: "randomized",
            options: { maxDelay: 1000 },
          }}
          hover={{
            type: "twinkle",
            options: {
              rate: 50,
              maxNum: 5,
              characterPool: "*^",
            },
          }}
          className="text-[9px]/2 sm:text-sm/3.5 w-[555px] h-[112]  whitespace-pre-wrap"
        >{`  ______  __  __          _      _____       _ _                 
 |  ____|/ _|/ _|        | |    / ____|     | | |                
 | |__  | |_| |_ ___  ___| |_  | |  __  __ _| | | ___ _ __ _   _ 
 |  __| |  _|  _/ _ \\/ __| __| | | |_ |/ _${"`"} | | |/ _ \\ '__| | | |
 | |____| | | ||  __/ (__| |_  | |__| | (_| | | |  __/ |  | |_| |
 |______|_| |_| \\___|\\___|\\__|  \\_____|\\__,_|_|_|\\___|_|   \\__, |
                                                            __/ |
                                                           |___/ `}</Txt>
        <Txt
          enter={{ type: "randomized", options: { maxDelay: 1000 } }}
          className="w-1/2 text-center text-base"
        >
          check out each of the effects in this library, as well as
          copy-and-pasteable components if there is an individual effect you
          want to modify and use in your project!
        </Txt>

        <div className="flex flex-row w-1/2 justify-around">
          <div className="">
            <div className="flex flex-row gap-2 items-center">
              <p className="text-2xl opacity-60">Enters</p>
              <RefreshButton refresh={refresh} setRefresh={setRefresh} />
            </div>
            <div className="text-base pl-4">
              <LinkButton
                key={"2step" + refresh}
                path="/gallery/enter_random"
                altClasses="h-6"
              >
                <Randomized2Step>2 Step Randomized</Randomized2Step>
              </LinkButton>
              <LinkButton
                key={"typed" + refresh}
                path="/gallery/enter_typed_sweep"
                altClasses="h-6"
              >
                <TypedSweep delay={40}>Typed Sweep</TypedSweep>
              </LinkButton>
              <LinkButton
                key={"number" + refresh}
                path="/gallery/enter_number_sweep"
                altClasses="h-6"
              >
                <NumberSweep delay={40} cyclesPerDigit={3}>
                  Number Sweep
                </NumberSweep>
              </LinkButton>
            </div>
          </div>
          <div className="">
            <p className="text-2xl opacity-60">Hovers</p>
            <div className="text-base pl-4">
              <LinkButton path="/gallery/hover_shuffle">
                <ShuffleText fullWords={true}>Word Shuffle</ShuffleText>
              </LinkButton>
              <LinkButton path="/gallery/hover_sweep">
                <HoverSweep>Command Line Sweep</HoverSweep>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
