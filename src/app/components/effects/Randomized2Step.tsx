import React, { useEffect, useState } from "react";

interface Randomized2StepProps {
  text: string;
  order?: number;
}

interface LetterState {
  display: string;
  target: string;
}

const charPool = ["-", "-", ".", "_"];
const maxDelay = 700;
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Randomized2Step(props: Randomized2StepProps) {
  const { text, order = 0 } = props;

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
        await wait(Math.random() * maxDelay + order * 200);
        updateCharacter(
          i,
          charPool[Math.floor(Math.random() * charPool.length)]
        );

        await wait(Math.random() * maxDelay);
        updateCharacter(i, c);
      })();
    });
  }, [text, order]);

  return (
    <p className="font-cutive">
      {letters.map((l, i) => (
        <span key={i} className={`${l.display !== l.target && "opacity-40"}`}>
          {l.display}
        </span>
      ))}
    </p>
  );
}
