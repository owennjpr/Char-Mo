import { cursorSweep } from "./effects/hovers/cursorSweep";
import { twinkle } from "./effects/hovers/twinkle";
import { wordShuffle } from "./effects/hovers/wordShuffle";
import { CursorSweepFn, WordShuffleFn, TwinkleFn } from "./types";

type HoverEffectMap = {
  "typed sweep": CursorSweepFn;
  shuffle: WordShuffleFn;
  twinkle: TwinkleFn;
};
export const hoverEffects: HoverEffectMap = {
  "typed sweep": cursorSweep,
  shuffle: wordShuffle,
  twinkle: twinkle,
};
