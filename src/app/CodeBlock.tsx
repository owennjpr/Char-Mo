import React, { ReactNode, useEffect, useState } from "react";

interface CodeBlockProps {
  contentpath: string;
}
function CodeBlock(props: CodeBlockProps) {
  const { contentpath } = props;
  const [pageContent, setPageContent] = useState<ReactNode>(null);

  useEffect(() => {
    console.log(contentpath);

    switch (contentpath) {
      case "/enter_random":
        setPageContent(<div>random enter code here</div>);
        break;
      case "/hover_shuffle":
        setPageContent(<div>hover shuffle code here</div>);
        break;

      case "/hover_sweep":
        setPageContent(<div>hover sweep code here</div>);
        break;
      case "/enter_typed_sweep":
        setPageContent(<div>typed sweep code here</div>);
        break;
      default:
        setPageContent(null);
        break;
    }
  }, [contentpath]);

  return <div className="font-cutive">{pageContent}</div>;
}

export default CodeBlock;
