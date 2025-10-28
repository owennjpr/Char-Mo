"use client";
import LinkButton from "@/components/LinkButton";
import RefreshButton from "@/components/RefreshButton";
import Txt from "@/components/Txt";
import React, { useState } from "react";

function Documentation() {
  const [refresh1, setRefresh1] = useState<number>(0);
  const [refresh2, setRefresh2] = useState<number>(0);
  const [refresh3, setRefresh3] = useState<number>(0);
  const [refresh4, setRefresh4] = useState<number>(0);

  return (
    <div className="w-full flex flex-col items-center font-cutive">
      <div className="pt-4">
        <LinkButton path="/">
          <Txt enter={{ type: "typed sweep" }} className="text-lg">
            {"[ back ]"}
          </Txt>
        </LinkButton>
      </div>
      <div className="w-full flex flex-col items-center py-8 gap-4">
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
          className="text-[9px]/2 sm:text-sm/3.5 w-[630px] h-[84px] whitespace-pre-wrap"
        >{`  _____                                        _        _   _             
 |  __ \\                                      | |      | | (_)            
 | |  | | ___   ___ _   _ _ __ ___   ___ _ __ | |_ __ _| |_ _  ___  _ __  
 | |  | |/ _ \\ / __| | | | '_ ${"`"} _ \\ / _ \\ '_ \\| __/ _ ${"`"}| __| |/ _ \\| '_ \\ 
 | |__| | (_) | (__| |_| | | | | | |  __/ | | | || (_| | |_| | (_) | | | |
 |_____/ \\___/ \\___|\\__,_|_| |_| |_|\\___|_| |_|\\__\\__,_|\\__|_|\\___/|_| |_|`}</Txt>
        <div className="w-1/2">
          <Txt className="text-2xl">Installation</Txt>
          <p className="bg-[#0003] p-4 text-base">npm i react-ascii-text</p>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Txt className="text-2xl">Usage</Txt>
          <p className="text-base">
            import the Txt component and use it declaratively in your JSX/TSX
            components, passing in a string.{" "}
            <span className="text-xs">no spans yet sorry :(</span>
          </p>
          <p className="bg-[#0003] p-4 text-base whitespace-pre-wrap overflow-x-scroll">
            {`import { Txt } from ...

<Txt enter={{ type: "typed sweep" }}>
  Hello World!
</Txt>`}
          </p>
          <div className="flex flex-row justify-between bg-[#0003] p-4 ">
            <Txt
              key={refresh1}
              className="text-base"
              enter={{ type: "typed sweep" }}
            >
              Hello World!
            </Txt>
            <RefreshButton
              refresh={refresh1}
              setRefresh={setRefresh1}
              className="translate-y-1"
            />
          </div>
          <p className="text-base pt-4">
            {"<Txt>"} is a wrapper around the {"<p>"} tag so any
            classes/styles/etc. that can be applied to a paragraph element can
            be applied directly.
          </p>
          <p className="bg-[#0003] p-4 text-base whitespace-pre-wrap overflow-x-scroll">
            {`<Txt 
  enter={{ type: "typed sweep" }} 
  style={{ color: "#0F0", borderBottom: "blue solid 2px" }}
>
  Hello World But Green!
</Txt>`}
          </p>
          <div className="flex flex-row justify-between bg-[#0003] p-4 ">
            <Txt
              key={refresh2}
              className="text-base"
              enter={{ type: "typed sweep" }}
              style={{ color: "#0F0", borderBottom: "blue solid 2px" }}
            >
              Hello World But Green!
            </Txt>
            <RefreshButton
              refresh={refresh2}
              setRefresh={setRefresh2}
              className="translate-y-1"
            />
          </div>
          <p className="text-base pt-4">
            For more customization over each effect use the
            {' "'}options{'"'} prop. Different effects have different sets of
            options, which you can see by mousing over the prop with your
            IDE&apos;s IntelliSense or HERE.
          </p>
          <p className="bg-[#0003] p-4 text-base whitespace-pre-wrap overflow-x-scroll">
            {`<Txt
  enter={{
    type: "randomized",
    options: { maxDelay: 2000, characterPool: "^*~${"`"}" },
  }}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Txt>`}
          </p>
          <div className="flex flex-row justify-between bg-[#0003] p-4 ">
            <Txt
              key={refresh3}
              className="text-base"
              enter={{
                type: "randomized",
                options: { maxDelay: 2000, characterPool: "^*~`" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Txt>
            <RefreshButton
              refresh={refresh3}
              setRefresh={setRefresh3}
              className="translate-y-1"
            />
          </div>
          <p className="text-base pt-4">
            You can apply multiple different categories of effects on the same
            Txt component, for example having both a hover and an enter effect.
          </p>
          <p className="bg-[#0003] p-4 text-base whitespace-pre-wrap overflow-x-scroll">
            {`<Txt
  enter={{
    type: "typed sweep",
    options: { rate: 20, cursor: "█" },
  }}
  hover={{
    type: "cursor sweep",
    options: { rate: 20, idleRate: 300, cursor: "█" },
  }}
>
  This text enters and hovers!
</Txt>`}
          </p>
          <div className="flex flex-row justify-between bg-[#0003] p-4 ">
            <Txt
              key={refresh4}
              className="text-base"
              enter={{
                type: "typed sweep",
                options: { rate: 20, cursor: "█" },
              }}
              hover={{
                type: "cursor sweep",
                options: { rate: 20, idleRate: 300, cursor: "█" },
              }}
            >
              This text enters and hovers!
            </Txt>
            <RefreshButton
              refresh={refresh4}
              setRefresh={setRefresh4}
              className="translate-y-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
