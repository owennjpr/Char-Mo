import { cursorSweep } from "./hovers/cursorSweep";
import { wordShuffle } from "./hovers/wordShuffle";
import { CursorSweepFn, WordShuffleFn } from "./types";

type HoverEffectMap = {
  "cursor sweep": CursorSweepFn;
  "word shuffle": WordShuffleFn;
};
export const hoverEffects: HoverEffectMap = {
  "cursor sweep": cursorSweep,
  "word shuffle": wordShuffle,
};
