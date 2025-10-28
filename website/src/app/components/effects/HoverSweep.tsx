import React, { useEffect, useState } from "react";

interface HoverSweepProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
  delay?: number;
}

export default function HoverSweep(props: HoverSweepProps) {
  const { children, delay = 40, ...rest } = props;
  const text = children;
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
    }, delay);

    return () => clearInterval(sweepTimer);
  }, [delay, hover, sweepIndex, text.length]);

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
    }, delay * 10);

    return () => clearInterval(flickerTimer);
  }, [flicker, delay]);

  return (
    <p
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {sweepIndex === -1
        ? text
        : text.slice(0, sweepIndex) +
          (flickerState ? "_" : " ") +
          text.slice(sweepIndex + 1)}
    </p>
  );
}
