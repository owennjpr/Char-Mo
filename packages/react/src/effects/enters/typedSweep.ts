import { LetterState, TypedSweepFn } from "../../types";

export const typedSweep: TypedSweepFn = async (
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
};
