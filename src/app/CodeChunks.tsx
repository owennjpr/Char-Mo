export const random2StepCode = `import React, { useEffect, useState } from "react";

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
        <span key={i} className={${'`${l.display !== l.target && "opacity-40"}`'}}>
          {l.display}
        </span>
      ))}
    </p>
  );
}
`;

export const typedSweepCode = `import React, { useEffect, useState } from "react";

interface TypedSweepProps {
  text: string;
  delay: number;
}
export default function TypedSweep(props: TypedSweepProps) {
  const { text, delay } = props;
  const [sweepIndex, setSweepIndex] = useState<number>(0);

  useEffect(() => {
    setSweepIndex(0);
    const interval = setInterval(() => {
      setSweepIndex((s) => {
        if (s == text.length) {
          clearInterval(interval);
          return s;
        } else {
          return s + 1;
        }
      });
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <p className="font-cutive">
      {text.slice(0, sweepIndex) + (sweepIndex < text.length ? "_" : "")}
    </p>
  );
}`;

export const numberSweepCode = `import React, { useEffect, useRef, useState } from "react";

interface NumberSweepProps {
  text: string;
  delay: number;
  cyclesPerDigit: number;
}
export default function NumberSweep(props: NumberSweepProps) {
  const { text, delay, cyclesPerDigit } = props;
  const [content, setContent] = useState<string>("");
  const sweepIndex = useRef<number>(text.length * cyclesPerDigit);
  const digitPool = "0123456789";

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(sweepIndex.current / cyclesPerDigit);

      let digits = "";

      for (let i = 0; i < index; i++) {
        digits += digitPool[Math.floor(Math.random() * 10)];
      }

      setContent(digits + text.slice(index));

      if (sweepIndex.current > 0) {
        sweepIndex.current -= 1;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, cyclesPerDigit]);

  return <p className="font-cutive">{content}</p>;
}
`;
