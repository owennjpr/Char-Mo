import React, { useEffect, useState, useRef } from "react";
import { Enter, Hover, LetterState, HoverState } from "../lib/types";
import { enterEffects } from "../lib/enterMap";
import { hoverEffects } from "../lib/hoverMap";

interface DTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
  enter?: Enter | null;
  hover?: Hover | null;
}

function TxtDev(props: DTextProps) {
  const { children, enter, hover, ...rest } = props;

  const [text, setText] = useState<LetterState[]>(
    children.split("").map((c) => ({ char: c, target: c }))
  );
  const [entered, setEntered] = useState<boolean>(false);
  const [hovering, setHovering] = useState<HoverState>({
    hover: false,
    index: -1,
  });
  const hoveringRef = useRef<HoverState>({
    hover: false,
    index: -1,
  });
  hoveringRef.current = hovering;

  const enterRef = useRef<Enter | null>(enter);
  const hoverRef = useRef<Hover | null>(hover);

  useEffect(() => {
    enterRef.current = enter;
  }, [enter]);

  useEffect(() => {
    hoverRef.current = hover;
  }, [hover]);

  useEffect(() => {
    let active = true;

    const initialLetters = children
      .split("")
      .map((c) => ({ char: "", target: c }));

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

    const initialLetters = children
      .split("")
      .map((c) => ({ char: "", target: c }));

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
  return (
    <p {...rest}>
      {text.map((l, i) => (
        <span
          key={i}
          className={l.className}
          style={l.style}
          onMouseEnter={() => setHovering({ hover: true, index: i })}
          onMouseLeave={() => setHovering({ hover: false, index: i })}
        >
          {l.char}
        </span>
      ))}
    </p>
  );
}

export default TxtDev;
