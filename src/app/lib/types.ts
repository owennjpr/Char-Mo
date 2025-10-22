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
      type: "word shuffle";
      options?: {
        rate?: number;
        characterPool?: string;
      };
    };

export type LetterState = {
  char: string;
  target: string;
  className?: string;
  style?: React.CSSProperties;
};

export type EffectFn<T extends object> = (
  text: LetterState[],
  setText: (l: LetterState[]) => void,
  options?: T,
  hover?: () => boolean
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
