import { HoverState, LetterState, RetypeFn } from "../../types";

export const retype: RetypeFn = async (
  text: LetterState[],
  setText: (t: LetterState[]) => void,
  options?: {
    deleteRate?: number;
    typeRate?: number;
    cursor?: string;
  },
  hover?: () => HoverState,
  prevText?: LetterState[]
) => {
  const { deleteRate = 40, typeRate = 40, cursor = "_" } = options || {};

  if (!prevText) return;

  const targetString = text.map((l) => l.target).toString();
  const prevTargetString = prevText.map((l) => l.target).toString();

  if (targetString === prevTargetString) return;

  // delete
  const toDelete = prevText.map((l) => ({ ...l }));
  setText([...toDelete]);

  let deleteIndex = toDelete.length - 1;
  while (deleteIndex >= 0) {
    toDelete[deleteIndex] = {
      ...toDelete[deleteIndex],
      char: cursor,
    };
    setText([...toDelete]);
    await new Promise((r) => setTimeout(r, deleteRate));

    toDelete[deleteIndex] = {
      ...toDelete[deleteIndex],
      char: "",
    };

    setText([...toDelete]);
    deleteIndex--;
  }

  // retype
  const toType = text.map((l) => ({ ...l, char: "" }));

  setText([...toType]);

  for (let i = 0; i < toType.length; i++) {
    if (i > 0) {
      toType[i - 1] = {
        ...toType[i - 1],
        char: toType[i - 1].target,
      };
    }

    toType[i] = { ...toType[i], char: cursor };
    setText([...toType]);

    await new Promise((r) => setTimeout(r, typeRate));
  }

  // fix last character
  if (toType.length > 0) {
    toType[toType.length - 1] = {
      ...toType[toType.length - 1],
      char: toType[toType.length - 1].target,
    };
    setText([...toType]);
  }
};
