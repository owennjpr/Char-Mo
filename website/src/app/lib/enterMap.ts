import { numberSweep } from "./enters/numberSweep";
import { randomized } from "./enters/randomized";
import { typedSweep } from "./enters/typedSweep";
import { NumberSweepFn, RandomizedFn, TypedSweepFn } from "./types";

type EnterEffectMap = {
  "typed sweep": TypedSweepFn;
  "number sweep": NumberSweepFn;
  randomized: RandomizedFn;
};
export const enterEffects: EnterEffectMap = {
  "typed sweep": typedSweep,
  "number sweep": numberSweep,
  randomized: randomized,
};
