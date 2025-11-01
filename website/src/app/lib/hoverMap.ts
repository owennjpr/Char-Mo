import { cursorSweep } from "./hovers/cursorSweep";
import { twinkle } from "./hovers/twinkle";
import { wordShuffle } from "./hovers/wordShuffle";
import { CursorSweepFn, WordShuffleFn, TwinkleFn } from "./types";

type HoverEffectMap = {
  "cursor sweep": CursorSweepFn;
  shuffle: WordShuffleFn;
  twinkle: TwinkleFn;
};
export const hoverEffects: HoverEffectMap = {
  "cursor sweep": cursorSweep,
  shuffle: wordShuffle,
  twinkle: twinkle,
};
