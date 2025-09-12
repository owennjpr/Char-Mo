import React, { useEffect, useState } from "react";

interface LineProps {
  line: string;
}

interface LetterState {
  display: string;
  target: string;
}
function Line(props: LineProps) {
  const { line } = props;

  const [letters, setLetters] = useState<LetterState[]>(
    line.split("").map((char) => {
      return { display: "", target: char };
    })
  );
  // delay function
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const updateCharacter = async (index: number, display: string) => {
    setLetters((prev) =>
      prev.map((l, i) => (i === index ? { ...l, display: display } : l))
    );
  };

  useEffect(() => {
    letters.forEach((l, i) => {
      (async () => {
        await wait(Math.random() * 800);
        updateCharacter(i, ["-", "_", ".", "-"][Math.floor(Math.random() * 4)]);

        await wait(Math.random() * 800);
        updateCharacter(i, l.target);
      })();
    });
  }, []);

  return (
    <p className="font-cutive w-full">
      {letters.map((l, i) => (
        <span key={i} className={`${l.display !== l.target && "opacity-40"}`}>
          {l.display}
        </span>
      ))}
    </p>
  );
}

export default Line;
