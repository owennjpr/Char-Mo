import React, { useEffect, useState, useRef } from "react";
import { Enter, Hover, LetterState, HoverState } from "../types";
import { enterEffects } from "../enterMap";
import { hoverEffects } from "../hoverMap";

interface TxtProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
  enter?: Enter | null;
  hover?: Hover | null;
}

export const Txt = (props: TxtProps) => {
  const { children, enter = null, hover = null, ...rest } = props;

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

  // refs to reduce need for rerendering / retriggering effects
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

    // if the children change but the component already
    // entered / there is no enter anim, then just set to the new child
    const initialLetters = children
      .split("")
      .map((c) => ({ char: entered || !enterRef.current ? c : "", target: c }));

    setText(initialLetters);

    (async () => {
      if (entered) return;
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
  }, [children, entered]);

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
};
