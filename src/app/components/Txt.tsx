import React, { useEffect, useState } from "react";
import { Enter, Hover, LetterState } from "../lib/types";
import { enterEffects } from "../lib/enters";

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
    if (!hover || !entered || !hovering) return;
  }, [hovering, entered, hover]);
  return (
    <p
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      {...rest}
    >
      {text.map((l, i) => (
        <span key={i} className={l.className} style={l.style}>
          {l.char}
        </span>
      ))}
    </p>
  );
}

export default Txt;
