import { LetterState, NumberSweepFn } from "../types";

export const numberSweep: NumberSweepFn = async (
  text: LetterState[],
  setText: (t: LetterState[]) => void,
  options?: {
    rate?: number;
    cyclesPerDigit?: number;
    characterPool?: string;
    startDelay?: number;
  }
) => {
  const {
    rate = 40,
    cyclesPerDigit = 5,
    characterPool = "0123456789",
    startDelay = 0,
  } = options || {};

  await new Promise((r) => setTimeout(r, startDelay));

  let remainingCycles = text.length * cyclesPerDigit;

  while (remainingCycles > 0) {
    const index = Math.floor(remainingCycles / Math.max(cyclesPerDigit, 1));

    for (let i = 0; i < text.length; i++) {
      if (i < index) {
        text[i].char =
          characterPool[Math.floor(Math.random() * characterPool.length)];
      } else {
        text[i].char = text[i].target;
      }
    }

    setText([...text]);
    remainingCycles--;
    await new Promise((r) => setTimeout(r, rate));
  }
};
