import { LetterState, HoverState, CaseFn, HoverCaseOptions } from "../../types";

export const caseChange: CaseFn = async (
  text: LetterState[],
  setText: (t: LetterState[]) => void,
  options?: HoverCaseOptions,
  hover?: () => HoverState
) => {
  const { type = "upper" } = options || {};

  if (hover && hover().hover) {
    const newText = text.map((letter) => ({
      ...letter,
      char:
        type == "upper"
          ? letter.target.toUpperCase()
          : letter.target.toLowerCase(),
    }));
    setText([...newText]);
  } else {
    const resetText = text.map((letter) => ({
      ...letter,
      char: letter.target,
    }));
    setText([...resetText]);
  }
};
