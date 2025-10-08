import React, { useEffect, useState } from "react";

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
          >{`${t.display}${fullWords ? " " : ""}`}</span>
        );
      })}
    </p>
  );
}
