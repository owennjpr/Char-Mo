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

interface TypedSweepProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
  delay: number;
}
export default function TypedSweep(props: TypedSweepProps) {
  const { children, delay, ...rest } = props;
  const text = children;
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
    <p {...rest}>
      {text.slice(0, sweepIndex) + (sweepIndex < text.length ? "_" : "")}
    </p>
  );
}
`;

export const numberSweepCode = `import React, { useEffect, useRef, useState } from "react";

interface NumberSweepProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
  delay: number;
  cyclesPerDigit: number;
}

const digitPool = "0123456789";

export default function NumberSweep(props: NumberSweepProps) {
  const { children, delay, cyclesPerDigit, ...rest } = props;
  const text = children;
  const [content, setContent] = useState<string>("");
  const sweepIndex = useRef<number>(0);

  useEffect(() => {
    sweepIndex.current = text.length * cyclesPerDigit;

    const interval = setInterval(() => {
      const index = Math.floor(
        sweepIndex.current / Math.max(cyclesPerDigit, 1)
      );

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

  return <p {...rest}>{content}</p>;
}`;

export const hoverShuffleCode = `import React, { useEffect, useState } from "react";

interface ShuffleTextProps {
  text: string;
  fullWords: boolean;
  delay?: number;
}

interface TextState {
  display: string;
  original: string;
}

const charPool = "!@#$%&*()_+=][;/<>?\\œåß©¬æçµXYZ";

export default function ShuffleText(props: ShuffleTextProps) {
  const { text, fullWords, delay = 50 } = props;
  const [content, setContent] = useState<TextState[]>(
    (fullWords ? text.split(" ") : text.split("")).map((t) => {
      return { display: t, original: t };
    })
  );
  const [hover, setHover] = useState<number>(-1);

  useEffect(() => {
    if (hover === -1) {
      setContent((prev) => prev.map((t) => ({ ...t, display: t.original })));
      return;
    }
    const interval = setInterval(() => {
      setContent((prev) =>
        prev.map((t, i) => {
          if (i !== hover) return { ...t, display: t.original };

          const len = fullWords ? t.original.length : 1;
          let randString = "";
          for (let i = 0; i < len; i++) {
            randString += charPool[Math.floor(Math.random() * charPool.length)];
          }

          return { ...t, display: randString };
        })
      );
    }, delay);

    return () => clearInterval(interval);
  }, [hover, fullWords, delay]);
  return (
    <p className="font-cutive">
      {content.map((t, i) => {
        return (
          <span
            key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(-1)}
          >{${'`${t.display}${fullWords ? " " : ""}}`'}</span>
        );
      })}
    </p>
  );
}
`;

export const hoverSweepCode = `import React, { useEffect, useState } from "react";

interface HoverSweepProps {
  text: string;
}

export default function HoverSweep(props: HoverSweepProps) {
  const { text } = props;
  const [hover, setHover] = useState<boolean>(false);
  const [sweepIndex, setSweepIndex] = useState<number>(-1);
  const [flicker, setFlicker] = useState<boolean>(false);
  const [flickerState, setFlickerState] = useState<boolean>(true);

  // reset after hover ends
  useEffect(() => {
    if (!hover) {
      setSweepIndex(-1);
      setFlicker(false);
      setFlickerState(true);
    }
  }, [hover]);

  // sweep
  useEffect(() => {
    if (!hover || sweepIndex >= text.length) return;

    const sweepTimer = setInterval(() => {
      setSweepIndex((s) => s + 1);
    }, 40);

    return () => clearInterval(sweepTimer);
  }, [hover, sweepIndex, text.length]);

  // transition to flicker
  useEffect(() => {
    if (hover && sweepIndex >= text.length) {
      setFlicker(true);
    }
  }, [hover, sweepIndex, text.length]);

  // flicker
  useEffect(() => {
    if (!flicker) return;

    const flickerTimer = setInterval(() => {
      setFlickerState((s) => !s);
    }, 400);

    return () => clearInterval(flickerTimer);
  }, [flicker]);

  return (
    <p
      className="font-cutive"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {sweepIndex === -1
        ? text
        : text.slice(0, sweepIndex) +
          (flickerState ? "_" : " ") +
          text.slice(sweepIndex + 1)}
    </p>
  );
}
`;
