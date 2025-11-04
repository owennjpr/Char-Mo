import { retype } from "./morphs/retype";
import { RetypeFn } from "./types";

type MorphEffectMap = {
  retype: RetypeFn;
};
export const morphEffects: MorphEffectMap = {
  retype: retype,
};
