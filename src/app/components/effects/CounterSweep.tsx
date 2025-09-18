import React, { useEffect, useRef, useState } from "react";

interface CounterSweepProps {
  text: string;
  delay: number;
  cyclesPerDigit: number;
}
function CounterSweep(props: CounterSweepProps) {
  const { text, delay, cyclesPerDigit } = props;
  const len = text.length;
  const [content, setContent] = useState<string>(text);
  const sweepIndex = useRef<number>(len * cyclesPerDigit);
  const digits = "0123456789";

  useEffect(() => {
    const interval = setInterval(() => {
      const realI = Math.floor(sweepIndex.current / cyclesPerDigit);

      let randString = "";

      for (let i = 0; i < realI; i++) {
        randString += digits[Math.floor(Math.random() * 10)];
      }
      // const randString = Array.from({ length: realI }, () =>
      //   String.fromCharCode(Math.floor(48 + Math.random() * 10))
      // ).join("");

      setContent(randString + text.slice(realI));

      if (sweepIndex.current > 0) {
        sweepIndex.current -= 1;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, cyclesPerDigit]);

  return <div className="font-cutive">{content}</div>;
}

export default CounterSweep;
