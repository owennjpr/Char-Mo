// THIS IS AN OLD IMPLEMENTATION DO NOT USE (go to packages/react/effects for up to date version)

import React, { useEffect, useState } from "react";

interface Randomized2StepProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
  maxDelay?: number;
}

interface LetterState {
  display: string;
  target: string;
}

const charPool = ["-", "-", ".", "_"];
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Randomized2Step(props: Randomized2StepProps) {
  const { children, maxDelay = 1000, ...rest } = props;
  const text = children;
  const [letters, setLetters] = useState<LetterState[]>(
    text.split("").map((char) => {
      return { display: "", target: char };
    })
  );

  const updateCharacter = (index: number, display: string) => {
    setLetters((prev) =>
      prev.map((l, i) => (i === index ? { ...l, display: display } : l))
    );
  };

  useEffect(() => {
    text.split("").forEach((c, i) => {
      (async () => {
        updateCharacter(i, "");
        await wait(Math.random() * (maxDelay / 2));
        updateCharacter(
          i,
          charPool[Math.floor(Math.random() * charPool.length)]
        );

        await wait(Math.random() * (maxDelay / 2));
        updateCharacter(i, c);
      })();
    });
  }, [text, maxDelay]);

  return (
    <p {...rest}>
      {letters.map((l, i) => (
        <span key={i} className={`${l.display !== l.target && "opacity-40"}`}>
          {l.display}
        </span>
      ))}
    </p>
  );
}
