// THIS IS AN OLD IMPLEMENTATION DO NOT USE (go to packages/react/effects for up to date version)

import React, { useEffect, useRef, useState } from "react";

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
}
