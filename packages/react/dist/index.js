// src/components/Txt.tsx
import { useEffect, useState, useRef } from "react";

// src/effects/enters/numberSweep.ts
var numberSweep = async (text, setText, options) => {
  const {
    rate = 40,
    cyclesPerDigit = 5,
    characterPool = "0123456789",
    startDelay = 0
  } = options || {};
  await new Promise((r) => setTimeout(r, startDelay));
  let remainingCycles = text.length * cyclesPerDigit;
  while (remainingCycles > 0) {
    const index = Math.floor(remainingCycles / Math.max(cyclesPerDigit, 1));
    for (let i = 0; i < text.length; i++) {
      if (i < index) {
        text[i].char = characterPool[Math.floor(Math.random() * characterPool.length)];
      } else {
        text[i].char = text[i].target;
      }
    }
    setText([...text]);
    remainingCycles--;
    await new Promise((r) => setTimeout(r, rate));
  }
};

// src/effects/enters/randomized.ts
var randomized = async (text, setText, options) => {
  const {
    maxDelay = 1e3,
    characterPool = "-._-",
    startDelay = 0
  } = options || {};
  await new Promise((r) => setTimeout(r, startDelay));
  const pool = characterPool.split("");
  await Promise.all(
    text.map(async (_, i) => {
      text[i] = { ...text[i], char: "" };
      setText([...text]);
      await new Promise((r) => setTimeout(r, Math.random() * (maxDelay / 2)));
      text[i] = {
        ...text[i],
        char: pool[Math.floor(Math.random() * pool.length)],
        style: { opacity: 0.4 }
      };
      setText([...text]);
      await new Promise((r) => setTimeout(r, Math.random() * (maxDelay / 2)));
      text[i] = { ...text[i], char: text[i].target, style: { opacity: 1 } };
      setText([...text]);
    })
  );
};

// src/effects/enters/typedSweep.ts
var typedSweep = async (text, setText, options) => {
  const { rate = 40, cursor = "_", startDelay = 0 } = options || {};
  await new Promise((r) => setTimeout(r, startDelay));
  const updated = text.map((l) => ({ ...l, char: "" }));
  setText([...updated]);
  for (let i = 0; i < text.length; i++) {
    if (i > 0) {
      updated[i - 1] = {
        ...updated[i - 1],
        char: updated[i - 1].target
      };
    }
    updated[i] = { ...updated[i], char: cursor };
    setText([...updated]);
    await new Promise((r) => setTimeout(r, rate));
  }
  if (updated.length > 0) {
    updated[text.length - 1] = {
      ...updated[text.length - 1],
      char: updated[text.length - 1].target
    };
    setText([...updated]);
  }
};

// src/enterMap.ts
var enterEffects = {
  "typed sweep": typedSweep,
  "number sweep": numberSweep,
  randomized
};

// src/effects/hovers/cursorSweep.ts
var cursorSweep = async (text, setText, options, hover) => {
  if (!hover || !hover().hover) {
    const resetText = text.map((letter) => ({
      ...letter,
      char: letter.target
    }));
    setText([...resetText]);
    return;
  }
  const {
    rate = 30,
    cursor = "_",
    idle = true,
    idleRate = 300
  } = options || {};
  let sweepIndex = 0;
  let flicker = false;
  let flickerState = false;
  const updateText = () => {
    const updated = text.map((letter, index) => {
      if (index < sweepIndex) {
        return { ...letter, char: letter.target };
      } else if (index === sweepIndex && !flicker) {
        return { ...letter, char: cursor };
      } else if (index === sweepIndex && flicker) {
        return { ...letter, char: flickerState ? cursor : " " };
      } else {
        return { ...letter, char: letter.target };
      }
    });
    if (sweepIndex >= text.length && flicker) {
      updated.push({
        char: flickerState ? cursor : " ",
        target: ""
      });
    }
    setText([...updated]);
  };
  updateText();
  while (sweepIndex < text.length && hover().hover) {
    await new Promise((resolve) => setTimeout(resolve, rate));
    sweepIndex++;
    updateText();
  }
  if (sweepIndex >= text.length && idle && hover().hover) {
    flicker = true;
    while (hover().hover) {
      await new Promise((resolve) => setTimeout(resolve, idleRate));
      flickerState = !flickerState;
      updateText();
    }
  }
};

// src/effects/hovers/twinkle.ts
var twinkle = async (text, setText, options, hover) => {
  const {
    rate = 100,
    characterPool = "*^",
    maxNum = 5,
    opacity = 1
  } = options || {};
  const len = text.length;
  while (hover && hover().hover) {
    const count = Math.floor(Math.random() * maxNum);
    const ids = Array.from(
      { length: count },
      () => Math.floor(Math.random() * len)
    );
    const newText = text.map((letter, i) => ({
      ...letter,
      char: ids.includes(i) ? characterPool[Math.floor(Math.random() * characterPool.length)] : letter.target,
      style: { ...letter.style, opacity: ids.includes(i) ? opacity : 1 }
    }));
    setText(newText);
    await new Promise((resolve) => setTimeout(resolve, rate));
  }
  const resetText = text.map((letter) => ({
    ...letter,
    char: letter.target
  }));
  setText([...resetText]);
};

// src/effects/hovers/wordShuffle.ts
var wordShuffle = async (text, setText, options, hover) => {
  const {
    rate = 40,
    characterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    delimiter = " "
  } = options || {};
  let block = 0;
  const textBlocks = [];
  for (let i = 0; i < text.length; i++) {
    const l = text[i];
    if (l.target == delimiter) {
      block += 1;
    }
    textBlocks.push({ ...l, block });
  }
  while (hover && hover().hover) {
    if (hover().index === -1) {
      await new Promise((resolve) => setTimeout(resolve, rate));
      continue;
    }
    const targetBlock = textBlocks[hover().index].block;
    const newText = textBlocks.map((letter) => ({
      ...letter,
      char: letter.block == targetBlock && letter.target !== delimiter ? characterPool[Math.floor(Math.random() * characterPool.length)] : letter.target
    }));
    setText(newText);
    await new Promise((resolve) => setTimeout(resolve, rate));
  }
  const resetText = text.map((letter) => ({
    ...letter,
    char: letter.target
  }));
  setText([...resetText]);
};

// src/hoverMap.ts
var hoverEffects = {
  "typed sweep": cursorSweep,
  shuffle: wordShuffle,
  twinkle
};

// src/effects/morphs/retype.ts
var retype = async (text, setText, options, hover, prevText) => {
  const { deleteRate = 40, typeRate = 40, cursor = "_" } = options || {};
  if (!prevText) return;
  const targetString = text.map((l) => l.target).toString();
  const prevTargetString = prevText.map((l) => l.target).toString();
  if (targetString === prevTargetString) return;
  const toDelete = prevText.map((l) => ({ ...l }));
  setText([...toDelete]);
  let deleteIndex = toDelete.length - 1;
  while (deleteIndex >= 0) {
    toDelete[deleteIndex] = {
      ...toDelete[deleteIndex],
      char: cursor
    };
    setText([...toDelete]);
    await new Promise((r) => setTimeout(r, deleteRate));
    toDelete[deleteIndex] = {
      ...toDelete[deleteIndex],
      char: ""
    };
    setText([...toDelete]);
    deleteIndex--;
  }
  const toType = text.map((l) => ({ ...l, char: "" }));
  setText([...toType]);
  for (let i = 0; i < toType.length; i++) {
    if (i > 0) {
      toType[i - 1] = {
        ...toType[i - 1],
        char: toType[i - 1].target
      };
    }
    toType[i] = { ...toType[i], char: cursor };
    setText([...toType]);
    await new Promise((r) => setTimeout(r, typeRate));
  }
  if (toType.length > 0) {
    toType[toType.length - 1] = {
      ...toType[toType.length - 1],
      char: toType[toType.length - 1].target
    };
    setText([...toType]);
  }
};

// src/morphMap.ts
var morphEffects = {
  retype
};

// src/components/Txt.tsx
import { jsx } from "react/jsx-runtime";
var Txt = (props) => {
  const { children, enter = null, hover = null, morph = null, ...rest } = props;
  const [text, setText] = useState([]);
  const textRef = useRef([]);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const hoveringRef = useRef({
    hover: false,
    index: -1
  });
  const [entered, setEntered] = useState(false);
  const [morphing, setMorphing] = useState(false);
  textRef.current = text;
  hoveringRef.current = {
    hover: isHovering,
    index: hoverIndex
  };
  const enterRef = useRef(enter);
  const hoverRef = useRef(hover);
  const morphRef = useRef(morph);
  useEffect(() => {
    enterRef.current = enter;
  }, [enter]);
  useEffect(() => {
    hoverRef.current = hover;
  }, [hover]);
  useEffect(() => {
    morphRef.current = morph;
  }, [morph]);
  useEffect(() => {
    let active = true;
    const initialLetters = children.split("").map((c) => ({ char: entered || !enterRef.current ? c : "", target: c }));
    if (!entered) {
      setText(initialLetters);
      (async () => {
        if (enterRef.current && enterEffects[enterRef.current.type])
          await enterEffects[enterRef.current.type](
            initialLetters,
            (t) => active && setText(t),
            enterRef.current.options
          );
        if (active) setEntered(true);
      })();
    } else if (morphRef.current && morphEffects[morphRef.current.type]) {
      setMorphing(true);
      (async () => {
        if (morphRef.current)
          await morphEffects[morphRef.current.type](
            initialLetters,
            (t) => active && setText(t),
            morphRef.current.options,
            () => {
              return hoveringRef.current;
            },
            textRef.current
          );
        if (active) setMorphing(false);
      })();
    } else {
      setText(initialLetters);
    }
    return () => {
      active = false;
    };
  }, [children, entered]);
  useEffect(() => {
    if (!hoverRef.current || !entered || morphing) return;
    let active = true;
    (async () => {
      if (hoverRef.current && hoverEffects[hoverRef.current.type]) {
        await hoverEffects[hoverRef.current.type](
          textRef.current,
          (t) => active && setText(t),
          hoverRef.current.options,
          () => {
            return hoveringRef.current;
          }
        );
      }
    })();
    return () => {
      active = false;
    };
  }, [children, isHovering, entered, morphing]);
  return /* @__PURE__ */ jsx(
    "p",
    {
      ...rest,
      onMouseEnter: () => setIsHovering(true),
      onMouseLeave: () => {
        setIsHovering(false);
        setHoverIndex(-1);
      },
      children: text.map((l, i) => /* @__PURE__ */ jsx(
        "span",
        {
          className: l.className,
          style: l.style,
          onMouseEnter: () => setHoverIndex(i),
          children: l.char
        },
        i
      ))
    }
  );
};
export {
  Txt
};
