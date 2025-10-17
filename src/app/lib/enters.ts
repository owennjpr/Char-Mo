import {
  LetterState,
  NumberSweepFn,
  RandomizedFn,
  TypedSweepFn,
} from "./types";

type EnterEffectMap = {
  "typed sweep": TypedSweepFn;
  "number sweep": NumberSweepFn;
  randomized: RandomizedFn;
};
export const enterEffects: EnterEffectMap = {
  "typed sweep": async (
    text: LetterState[],
    setText: (t: LetterState[]) => void,
    options?: { rate?: number; cursor?: string }
  ) => {
    const { rate = 40, cursor = "_" } = options || {};
    const updated = text.map((l) => ({ ...l, char: "" }));
    setText([...updated]);

    for (let i = 0; i < text.length; i++) {
      if (i > 0) {
        // Fix the previous char to its target
        updated[i - 1] = {
          ...updated[i - 1],
          char: updated[i - 1].target,
        };
      }

      // Set current char as cursor
      updated[i] = { ...updated[i], char: cursor };

      setText([...updated]);
      await new Promise((r) => setTimeout(r, rate));
    }

    // Finalize the last character
    updated[text.length - 1] = {
      ...updated[text.length - 1],
      char: updated[text.length - 1].target,
    };
    setText([...updated]);
  },
  "number sweep": async (
    text: LetterState[],
    setText: (t: LetterState[]) => void,
    options?: { rate?: number; cyclesPerDigit?: number; characterPool?: string }
  ) => {
    const {
      rate = 40,
      cyclesPerDigit = 5,
      characterPool = "0123456789",
    } = options || {};

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
  },
  randomized: async (
    text: LetterState[],
    setText: (t: LetterState[]) => void,
    options?: { maxDelay?: number; characterPool?: string }
  ) => {
    const { maxDelay = 1000, characterPool = "-._-" } = options || {};
    const pool = characterPool.split("");

    await Promise.all(
      text.map(async (_, i) => {
        // if (!active()) return;

        text[i] = { ...text[i], char: "" };
        setText([...text]);
        await new Promise((r) => setTimeout(r, Math.random() * (maxDelay / 2)));
        // if (!active()) return;

        text[i] = {
          ...text[i],
          char: pool[Math.floor(Math.random() * pool.length)],
          style: { opacity: 0.4 },
        };
        setText([...text]);
        await new Promise((r) => setTimeout(r, Math.random() * (maxDelay / 2)));
        // if (!active()) return;

        text[i] = { ...text[i], char: text[i].target, style: { opacity: 1 } };
        setText([...text]);
      })
    );
  },
};
