export type Enter =
  | {
      type: "randomized";
      options?: {
        maxDelay?: number;
        characterPool?: string;
        startDelay?: number;
      };
    }
  | {
      type: "typed sweep";
      options?: {
        rate?: number;
        cursor?: string;
        startDelay?: number;
      };
    }
  | {
      type: "number sweep";
      options?: {
        rate?: number;
        cyclesPerDigit?: number;
        characterPool?: string;
        startDelay?: number;
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

// internal state for characters
export type LetterState = {
  char: string; // current display character
  target: string; // final character (based on passed children)
  className?: string;
  style?: React.CSSProperties;
};

// internal state for hover
export type HoverState = {
  hover: boolean;
  index: number; // for effects that care about which letters are hovered
};

// generic effect type
export type EffectFn<T extends object> = (
  text: LetterState[],
  setText: (l: LetterState[]) => void,
  options?: T,
  hover?: () => HoverState
) => Promise<void>;

// Enter Functions
export type TypedSweepFn = EffectFn<{
  rate?: number;
  cursor?: string;
  startDelay?: number;
}>;
export type NumberSweepFn = EffectFn<{
  rate?: number;
  cyclesPerDigit?: number;
  characterPool?: string;
  startDelay?: number;
}>;
export type RandomizedFn = EffectFn<{
  maxDelay?: number;
  characterPool?: string;
  startDelay?: number;
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
