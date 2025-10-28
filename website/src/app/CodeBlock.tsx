import React, { ReactNode, useEffect, useState } from "react";
import {
  hoverShuffleCode,
  hoverSweepCode,
  numberSweepCode,
  random2StepCode,
  typedSweepCode,
} from "./CodeChunks";

interface CodeBlockProps {
  contentpath: string;
}
function CodeBlock(props: CodeBlockProps) {
  const { contentpath } = props;
  const [pageContent, setPageContent] = useState<ReactNode>(null);

  useEffect(() => {
    console.log(contentpath);

    switch (contentpath) {
      case "/gallery/enter_random":
        setPageContent(random2StepCode);
        break;
      case "/gallery/hover_shuffle":
        setPageContent(hoverShuffleCode);
        break;
      case "/gallery/hover_sweep":
        setPageContent(hoverSweepCode);
        break;
      case "/gallery/enter_typed_sweep":
        setPageContent(typedSweepCode);
        break;
      case "/gallery/enter_number_sweep":
        setPageContent(numberSweepCode);
        break;
      default:
        setPageContent(null);
        break;
    }
  }, [contentpath]);

  return (
    <div className="w-full h-full font-cutive whitespace-pre-wrap overflow-y-scroll">
      {pageContent}
    </div>
  );
}

export default CodeBlock;
