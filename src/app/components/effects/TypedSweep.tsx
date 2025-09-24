import React, { useEffect, useState } from "react";

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
}
