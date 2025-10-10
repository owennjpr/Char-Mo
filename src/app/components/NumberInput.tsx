// More specialized number input since input type="number" wasn't quite what I wanted
import React from "react";
interface NumberInputProps {
  state: number;
  setState: (arg0: number) => void;
  min?: number;
  max?: number;
  digits?: number;
}
function NumberInput(props: NumberInputProps) {
  const { state, setState, min = 0, max = 999, digits = 3 } = props;
  return (
    <input
      name="num_input"
      type="text"
      inputMode="numeric"
      pattern={`${"\\d"}{1,${digits}}$`}
      maxLength={digits}
      value={state}
      onChange={(e) => {
        if (!e.target.validity.patternMismatch) {
          const val = Number(e.target.value);
          setState(Math.max(min, Math.min(val, max)));
        }
      }}
      className={`h-6 mt-2 border-b-1 border-[rgb(239, 233, 213) font-cutive text-2xl text-right invalid:bg-red-800`}
      style={{ width: digits + "rem" }}
    />
  );
}

export default NumberInput;
