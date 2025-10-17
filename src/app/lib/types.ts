export type Enter =
  | {
      type: "randomized";
      options?: {
        maxDelay?: number;
        characterPool?: string;
      };
    }
  | {
      type: "typed sweep";
      options?: {
        rate?: number;
        cursor?: string;
      };
    }
  | {
      type: "number sweep";
      options?: {
        rate?: number;
        cyclesPerDigit?: number;
        characterPool?: string;
      };
    };

export type HoverType = "shuffle" | "typed sweep";

export type HoverOptions = {
  rate?: number;
};

export type Hover = { type: HoverType; options?: HoverOptions };

export type LetterState = {
  char: string;
  target: string;
  className?: string;
  style?: React.CSSProperties;
};

export type EffectFn<T extends object> = (
  text: LetterState[],
  setText: (l: LetterState[]) => void,
  options?: T
) => Promise<void>;

export type TypedSweepFn = EffectFn<{ rate?: number; cursor?: string }>;
export type NumberSweepFn = EffectFn<{
  rate?: number;
  cyclesPerDigit?: number;
  characterPool?: string;
}>;
export type RandomizedFn = EffectFn<{
  maxDelay?: number;
  characterPool?: string;
}>;
