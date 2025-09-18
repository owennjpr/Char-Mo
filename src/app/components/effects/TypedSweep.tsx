import React, { useEffect, useState } from "react";

interface TypedSweepProps {
  text: string;
  delay: number;
}
function TypedSweep(props: TypedSweepProps) {
  const { text, delay } = props;
  const [sweep, setSweep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sweep == text.length) {
        clearInterval(interval);
      } else {
        setSweep((s) => s + 1);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [sweep, text, delay]);

  return (
    <div className="font-cutive">
      {text.slice(0, sweep) + (sweep < text.length ? "_" : "")}
    </div>
  );
}

export default TypedSweep;
