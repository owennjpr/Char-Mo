import { LetterState, TypedSweepFn } from "../types";

export const typedSweep: TypedSweepFn = async (
  text: LetterState[],
  setText: (t: LetterState[]) => void,
  options?: { rate?: number; cursor?: string; startDelay?: number }
) => {
  const { rate = 40, cursor = "_", startDelay = 0 } = options || {};

  await new Promise((r) => setTimeout(r, startDelay));

  const updated = text.map((l) => ({ ...l, char: "" }));
  setText([...updated]);

  for (let i = 0; i < text.length; i++) {
    if (i > 0) {
      // prev char --> target
      updated[i - 1] = {
        ...updated[i - 1],
        char: updated[i - 1].target,
      };
    }

    updated[i] = { ...updated[i], char: cursor };

    setText([...updated]);
    await new Promise((r) => setTimeout(r, rate));
  }

  // handle last character
  if (updated.length > 0) {
    updated[text.length - 1] = {
      ...updated[text.length - 1],
      char: updated[text.length - 1].target,
    };
    setText([...updated]);
  }
};
