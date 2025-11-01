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

export type Hover =
  | {
      type: "cursor sweep";
      options?: {
        rate?: number;
        cursor?: string;
        idle?: boolean;
        idleRate?: number;
      };
    }
  | {
      type: "shuffle";
      options?: {
        rate?: number;
        characterPool?: string;
        delimiter?: string;
      };
    }
  | {
      type: "twinkle";
      options?: {
        rate?: number;
        characterPool?: string;
        maxNum?: number;
        opacity?: number;
      };
    };

export type LetterState = {
  char: string;
  target: string;
  className?: string;
  style?: React.CSSProperties;
};

export type HoverState = {
  hover: boolean;
  index: number;
};

export type EffectFn<T extends object> = (
  text: LetterState[],
  setText: (l: LetterState[]) => void,
  options?: T,
  hover?: () => HoverState
) => Promise<void>;

// Enter Functions
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

// Hover Functions
export type CursorSweepFn = EffectFn<{
  rate?: number;
  cursor?: string;
  idle?: boolean;
  idleRate?: number;
}>;

export type WordShuffleFn = EffectFn<{
  rate?: number;
  characterPool?: string;
}>;

export type TwinkleFn = EffectFn<{
  rate?: number;
  maxNum?: number;
  characterPool?: string;
  opacity?: number;
}>;
