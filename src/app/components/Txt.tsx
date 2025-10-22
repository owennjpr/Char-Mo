import React, { useEffect, useState, useRef } from "react";
import { Enter, Hover, LetterState } from "../lib/types";
import { enterEffects } from "../lib/enterMap";
import { hoverEffects } from "../lib/hoverMap";

interface DTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
  enter?: Enter | null;
  hover?: Hover | null;
}

function Txt(props: DTextProps) {
  const { children, enter, hover, ...rest } = props;

  const [text, setText] = useState<LetterState[]>(
    children.split("").map((c) => ({ char: c, target: c }))
  );
  const [entered, setEntered] = useState<boolean>(false);
  const [hovering, setHovering] = useState<boolean>(false);
  const hoveringRef = useRef<boolean>(false);
  hoveringRef.current = hovering;

  useEffect(() => {
    let active = true;

    const initialLetters = children
      .split("")
      .map((c) => ({ char: "", target: c }));

    (async () => {
      if (enter && enterEffects[enter.type]) {
        await enterEffects[enter.type](
          initialLetters,
          (t) => active && setText(t),
          enter.options
        );
      }
      if (active) setEntered(true);
    })();
    return () => {
      active = false;
    };
  }, [children, enter]);

  useEffect(() => {
    if (!hover || !entered) return;

    let active = true;

    const initialLetters = children
      .split("")
      .map((c) => ({ char: "", target: c }));

    (async () => {
      if (hoverEffects[hover.type]) {
        await hoverEffects[hover.type](
          initialLetters,
          (t) => active && setText(t),
          hover.options,
          () => {
            return hoveringRef.current;
          }
        );
      }
    })();

    return () => {
      active = false;
    };
  }, [children, hovering, entered, hover]);
  return (
    <p {...rest}>
      {text.map((l, i) => (
        <span
          key={i}
          className={l.className}
          style={l.style}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {l.char}
        </span>
      ))}
    </p>
  );
}

export default Txt;
