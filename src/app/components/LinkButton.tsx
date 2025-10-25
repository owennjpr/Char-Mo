"use client";

import React, { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

interface LinkButtonProps {
  children?: ReactNode;
  path?: string;
}
function LinkButton(props: LinkButtonProps) {
  const { children, path = "/" } = props;
  const router = useRouter();
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [fade, setFade] = useState<boolean>(false);

  const redirect = async () => {
    setFade(true);
    await wait(200);
    if (path !== "/") {
      router.push(path);
    } else {
      router.replace("/");
    }
  };
  return (
    <div>
      <div className="cursor-pointer font-cutive h-6" onClick={redirect}>
        {children}
      </div>
      {fade && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 left-0 z-50 w-full h-full bg-[#1e2021]"
        />
      )}
    </div>
  );
}

export default LinkButton;
