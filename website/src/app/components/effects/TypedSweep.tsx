// THIS IS AN OLD IMPLEMENTATION DO NOT USE (go to packages/react/effects for up to date version)

import React, { useEffect, useState } from "react";

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
