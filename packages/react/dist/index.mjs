// src/components/Txt.tsx
import { useEffect, useState, useRef } from "react";

// src/effects/enters/numberSweep.ts
var numberSweep = async (text, setText, options) => {
  const {
    rate = 40,
    cyclesPerDigit = 5,
    characterPool = "0123456789"
  } = options || {};
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
  const { maxDelay = 1e3, characterPool = "-._-" } = options || {};
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
  const { rate = 40, cursor = "_" } = options || {};
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
  updated[text.length - 1] = {
    ...updated[text.length - 1],
    char: updated[text.length - 1].target
  };
  setText([...updated]);
};

// src/enterMap.ts
var enterEffects = {
  "typed sweep": typedSweep,
  "number sweep": numberSweep,
  randomized
};

// src/effects/hovers/cursorSweep.ts
var cursorSweep = async (text, setText, options, hover) => {
  if (!hover || !hover()) {
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
  while (sweepIndex < text.length && hover()) {
    await new Promise((resolve) => setTimeout(resolve, rate));
    sweepIndex++;
    updateText();
  }
  if (sweepIndex >= text.length && idle && hover()) {
    flicker = true;
    while (hover()) {
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
  while (hover && hover()) {
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

// src/hoverMap.ts
var hoverEffects = {
  "cursor sweep": cursorSweep,
  // "word shuffle": wordShuffle,
  twinkle
};

// src/components/Txt.tsx
import { jsx } from "react/jsx-runtime";
function Txt(props) {
  const { children, enter = null, hover = null, ...rest } = props;
  const [text, setText] = useState(
    children.split("").map((c) => ({ char: c, target: c }))
  );
  const [entered, setEntered] = useState(false);
  const [hovering, setHovering] = useState(false);
  const hoveringRef = useRef(false);
  hoveringRef.current = hovering;
  const enterRef = useRef(enter);
  const hoverRef = useRef(hover);
  useEffect(() => {
    enterRef.current = enter;
  }, [enter]);
  useEffect(() => {
    hoverRef.current = hover;
  }, [hover]);
  useEffect(() => {
    let active = true;
    const initialLetters = children.split("").map((c) => ({ char: "", target: c }));
    (async () => {
      if (enterRef.current && enterEffects[enterRef.current.type]) {
        await enterEffects[enterRef.current.type](
          initialLetters,
          (t) => active && setText(t),
          enterRef.current.options
        );
      }
      if (active) setEntered(true);
    })();
    return () => {
      active = false;
    };
  }, [children]);
  useEffect(() => {
    if (!hoverRef.current || !entered) return;
    let active = true;
    const initialLetters = children.split("").map((c) => ({ char: "", target: c }));
    (async () => {
      if (hoverRef.current && hoverEffects[hoverRef.current.type]) {
        await hoverEffects[hoverRef.current.type](
          initialLetters,
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
  }, [children, hovering, entered]);
  return /* @__PURE__ */ jsx("p", { ...rest, children: text.map((l, i) => /* @__PURE__ */ jsx(
    "span",
    {
      className: l.className,
      style: l.style,
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
      children: l.char
    },
    i
  )) });
}
export {
  Txt
};
