"use client";
import React, { useEffect, useState } from "react";

interface HoverSweepProps {
  text: string;
}

function HoverSweep(props: HoverSweepProps) {
  const { text } = props;
  const [hover, setHover] = useState<boolean>(false);
  const [sweepIndex, setSweepIndex] = useState<number>(-1);
  const [flicker, setFlicker] = useState<boolean>(false);
  const [flickerState, setFlickerState] = useState<boolean>(true);

  // Reset after hover ends
  useEffect(() => {
    if (!hover) {
      setSweepIndex(-1);
      setFlicker(false);
      setFlickerState(true);
    }
  }, [hover]);

  // Sweep effect
  useEffect(() => {
    if (!hover || sweepIndex >= text.length) return;

    const sweepTimer = setInterval(() => {
      setSweepIndex((s) => s + 1);
    }, 40);

    return () => clearInterval(sweepTimer);
  }, [hover, sweepIndex, text.length]);

  // Transition to flicker
  useEffect(() => {
    if (hover && sweepIndex >= text.length) {
      setFlicker(true);
    }
  }, [hover, sweepIndex, text.length]);

  // Flicker effect
  useEffect(() => {
    if (!flicker) return;

    const flickerTimer = setInterval(() => {
      setFlickerState((s) => !s);
    }, 400);

    return () => clearInterval(flickerTimer);
  }, [flicker]);

  return (
    <div
      className="font-cutive"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {sweepIndex === -1
        ? text
        : text.slice(0, sweepIndex) +
          (flickerState ? "_" : " ") +
          text.slice(sweepIndex + 1)}
    </div>
  );
}

export default HoverSweep;
