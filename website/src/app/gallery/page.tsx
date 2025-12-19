"use client";
import React, { useState } from "react";
import { Txt } from "@char-motion/react";
import LinkButton from "@/components/LinkButton";
import RefreshButton from "@/components/RefreshButton";
import MorphButton from "@/components/MorphButton";

function Gallery() {
  const [refresh1, setRefresh1] = useState<number>(0);
  const [refresh2, setRefresh2] = useState<number>(0);
  const [refresh3, setRefresh3] = useState<number>(0);
  const [morph1, setMorph1] = useState<boolean>(true);

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <div className="w-full h-screen flex flex-col sm:items-center font-cutive">
      <div className="w-full flex flex-col items-center pt-4">
        <LinkButton path="/">
          <Txt enter={{ type: "typed sweep" }} className="text-lg">
            {"[ back ]"}
          </Txt>
        </LinkButton>
      </div>
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
        className="text-[9px]/2 sm:text-sm/3.5 sm:w-[555px] h-[112]  whitespace-pre-wrap"
      >{`  ______  __  __          _      _____       _ _                 
 |  ____|/ _|/ _|        | |    / ____|     | | |                
 | |__  | |_| |_ ___  ___| |_  | |  __  __ _| | | ___ _ __ _   _ 
 |  __| |  _|  _/ _ \\/ __| __| | | |_ |/ _${"`"} | | |/ _ \\ '__| | | |
 | |____| | | ||  __/ (__| |_  | |__| | (_| | | |  __/ |  | |_| |
 |______|_| |_| \\___|\\___|\\__|  \\_____|\\__,_|_|_|\\___|_|   \\__, |
                                                            __/ |
                                                           |___/ `}</Txt>
      <table className=" w-full sm:w-5/6 text-[10px] sm:text-xs md:text-base text-center [&_th]:border [&_th]:[rgb(239, 233, 213)] [&_td]:border [&_td]:[rgb(239, 233, 213)]">
        <colgroup>
          <col style={{ width: "5%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "50%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Example</th>
            <th>Parameters (Options)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#0A01]">
            <td>Enter</td>
            <td>Typed Sweep</td>
            <td>
              <div className="flex flex-row justify-between gap-1 sm:gap-4 items-center px-1 sm:px-4">
                <Txt
                  key={refresh1}
                  enter={{ type: "typed sweep" }}
                  className="text-left"
                >
                  {lorem}
                </Txt>
                <RefreshButton refresh={refresh1} setRefresh={setRefresh1} />
              </div>
            </td>
            <td>
              <table className="w-full h-full [&_th]:border-t-0 [&_td]:border-b-0 ">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>rate</td>
                    <td>time in ms for each letter to type</td>
                    <td>number</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>cursor</td>
                    <td>which character to use as a cursor</td>
                    <td>string</td>
                    <td>_</td>
                  </tr>
                  <tr>
                    <td>startDelay</td>
                    <td>time in ms to wait before starting</td>
                    <td>number</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="bg-[#0A02]">
            <td>Enter</td>
            <td>Randomized</td>
            <td>
              <div className="flex flex-row justify-between gap-1 sm:gap-4 items-center px-1 sm:px-4">
                <Txt
                  key={refresh2}
                  enter={{ type: "randomized" }}
                  className="text-left"
                >
                  {lorem}
                </Txt>
                <RefreshButton refresh={refresh2} setRefresh={setRefresh2} />
              </div>
            </td>
            <td>
              <table className="w-full h-full [&_th]:border-t-0 [&_td]:border-b-0">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>maxDelay</td>
                    <td>maximum time for the animation to resolve</td>
                    <td>number</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>characterPool</td>
                    <td>which characters to use for intermediate step</td>
                    <td>string</td>
                    <td>-._-</td>
                  </tr>
                  <tr>
                    <td>startDelay</td>
                    <td>time in ms to wait before starting</td>
                    <td>number</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="bg-[#0A01]">
            <td>Enter</td>
            <td>Number Sweep</td>
            <td>
              <div className="flex flex-row justify-between gap-1 sm:gap-4 items-center px-1 sm:px-4">
                <Txt
                  key={refresh3}
                  enter={{ type: "number sweep" }}
                  className="text-left"
                >
                  100200300400500
                </Txt>
                <RefreshButton refresh={refresh3} setRefresh={setRefresh3} />
              </div>
            </td>
            <td>
              <table className="w-full h-full [&_th]:border-t-0 [&_td]:border-b-0">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>rate</td>
                    <td>time in ms between each tick</td>
                    <td>number</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>cyclesPerDigit</td>
                    <td>number of ticks for each character to be revealed</td>
                    <td>number</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>characterPool</td>
                    <td>available character to shuffle through</td>
                    <td>string</td>
                    <td>01234 56789</td>
                  </tr>
                  <tr>
                    <td>startDelay</td>
                    <td>time in ms to wait before starting</td>
                    <td>number</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>direction</td>
                    <td>whether numbers move right to left or left to right</td>
                    <td>
                      {`"ltr"`} or{` "rtl"`}
                    </td>
                    <td>{`"rtl"`}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="bg-[#00A1]">
            <td>Hover</td>
            <td>Typed Sweep</td>
            <td>
              <Txt hover={{ type: "typed sweep" }} className="text-left p-4">
                {lorem}
              </Txt>
            </td>
            <td>
              <table className="w-full h-full [&_th]:border-t-0 [&_td]:border-b-0">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>rate</td>
                    <td>time in ms between each tick</td>
                    <td>number</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>cursor</td>
                    <td>the character that sweeps though</td>
                    <td>string</td>
                    <td>_</td>
                  </tr>
                  <tr>
                    <td>idle</td>
                    <td>whether the cursor flickers at the end</td>
                    <td>boolean</td>
                    <td>true</td>
                  </tr>
                  <tr>
                    <td>idleRate</td>
                    <td>rate the cursor flickers at if idle is true</td>
                    <td>number</td>
                    <td>300</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="bg-[#00A2]">
            <td>Hover</td>
            <td>Shuffle</td>
            <td>
              <Txt hover={{ type: "shuffle" }} className="text-left p-4">
                {lorem}
              </Txt>
            </td>
            <td>
              <table className="w-full h-full [&_th]:border-t-0 [&_td]:border-b-0">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>rate</td>
                    <td>time in ms between each tick</td>
                    <td>number</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>characterPool</td>
                    <td>character that get shuffled on hover</td>
                    <td>string</td>
                    <td>ABCDEFGH IJKLMNOPQ RSTUVWXYZ</td>
                  </tr>
                  <tr>
                    <td>delimiter</td>
                    <td>
                      character that seperates chunks of the string to shuffle
                    </td>
                    <td>string</td>
                    <td>{`" "`}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="bg-[#00A1]">
            <td>Hover</td>
            <td>Twinkle</td>
            <td>
              <Txt hover={{ type: "twinkle" }} className="text-left p-4">
                {lorem}
              </Txt>
            </td>
            <td>
              <table className="w-full h-full [&_th]:border-t-0 [&_td]:border-b-0">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>rate</td>
                    <td>time in ms between each tick</td>
                    <td>number</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>characterPool</td>
                    <td>set of character that can appear</td>
                    <td>string</td>
                    <td>*^</td>
                  </tr>
                  <tr>
                    <td>maxNum</td>
                    <td>
                      amount of randomized characters that can appear each tick
                    </td>
                    <td>number</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>opacity</td>
                    <td>opacity of the randomized characters</td>
                    <td>number</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="bg-[#00A2]">
            <td>Hover</td>
            <td>Case</td>
            <td>
              <Txt hover={{ type: "case" }} className="text-left p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                {/* {lorem} */}
              </Txt>
            </td>
            <td>
              <table className="w-full h-full [&_th]:border-t-0 [&_td]:border-b-0">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>type</td>
                    <td>whether to make upper or lower case</td>
                    <td>
                      {`"upper"`} or {`"lower"`}
                    </td>
                    <td>{`"upper"`}</td>
                  </tr>
                  <tr>
                    <td>extraMappings</td>
                    <td>add extra character mappings beyond the alphabet</td>
                    <td>{`{[key: string]: string}`}</td>
                    <td>{`{}`}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="bg-[#A001]">
            <td>Morph</td>
            <td>Retype</td>
            <td>
              <div className="flex flex-row justify-between gap-1 sm:gap-4 items-center px-1 sm:px-4">
                <Txt morph={{ type: "retype" }} className="text-left">
                  {morph1 ? "Hello World!" : "Hello Universe!"}
                </Txt>
                <MorphButton morph={morph1} setMorph={setMorph1} />
              </div>
            </td>
            <td>
              <table className="w-full h-full [&_th]:border-t-0 [&_td]:border-b-0">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>deleteRate</td>
                    <td>time in ms to delete each old character</td>
                    <td>number</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>typeRate</td>
                    <td>time in ms to type each new character</td>
                    <td>number</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>cursor</td>
                    <td>character to use as cursor</td>
                    <td>string</td>
                    <td>_</td>
                  </tr>
                  <tr>
                    <td>keepCommonStart</td>
                    <td>
                      whether to only delete different characters or delete all
                    </td>
                    <td>boolean</td>
                    <td>true</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Gallery;
