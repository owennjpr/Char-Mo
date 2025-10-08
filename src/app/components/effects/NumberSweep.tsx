import React, { useEffect, useRef, useState } from "react";

interface NumberSweepProps {
  text: string;
  delay: number;
  cyclesPerDigit: number;
}

const digitPool = "0123456789";

export default function NumberSweep(props: NumberSweepProps) {
  const { text, delay, cyclesPerDigit } = props;
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

  return <p className="font-cutive">{content}</p>;
}
