"use client";
import React, { useEffect, useState } from "react";

interface ShuffleTextProps {
  text: string;
  fullWords: boolean;
}

interface TextState {
  display: string;
  original: string;
}
function ShuffleText(props: ShuffleTextProps) {
  const { text, fullWords } = props;
  const [content, setContent] = useState<TextState[]>(
    (fullWords ? text.split(" ") : text.split("")).map((t) => {
      return { display: t, original: t };
    })
  );
  const [hover, setHover] = useState<number>(-1);

  useEffect(() => {
    if (hover === -1) {
      setContent((prev) => prev.map((t, i) => ({ ...t, display: t.original })));
      return;
    }
    const interval = setInterval(() => {
      setContent((prev) =>
        prev.map((t, i) => {
          if (i !== hover) return { ...t, display: t.original };

          const len = fullWords ? t.original.length : 1;
          const randString = Array.from({ length: len }, () =>
            String.fromCharCode(Math.floor(33 + Math.random() * 93))
          ).join("");
          return { ...t, display: randString };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [hover, fullWords]);
  return (
    <div className="font-cutive">
      {content.map((t, i) => {
        return (
          <span
            key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(-1)}
          >{`${t.display}${fullWords ? " " : ""}`}</span>
        );
      })}
    </div>
  );
}

export default ShuffleText;
