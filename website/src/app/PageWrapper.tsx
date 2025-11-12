"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import CodeBlock from "./CodeBlock";
import { useState, useEffect } from "react";
// import ShowCodeButton from "./components/ShowCodeButton";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // const isHomePage = pathname === "/";
  const [isThin, setIsThin] = useState<boolean>(false);
  const [codeOpen, setCodeOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isThinScreen = window.innerWidth < 768; // Tailwind md breakpoint
      setIsThin(isThinScreen);

      if (!isThinScreen) {
        setCodeOpen(true);
      } else {
        setCodeOpen(false);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const shouldShow = pathname.startsWith("/gallery/") && (!isThin || codeOpen);
  return (
    <div className="relative w-full h-screen flex flex-row gap-1 z-0">
      <div className={"w-full  z-0 " + (shouldShow && "md:w-1/2")}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>

      <AnimatePresence>
        {shouldShow && (
          <motion.div
            key="code-pane"
            className="absolute right-0 md:relative w-full md:w-1/2 h-full p-4 bg-[#1A1C1D] z-10"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              opacity: { duration: 0.5 },
            }}
          >
            <CodeBlock contentpath={pathname} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* {!isHomePage && isThin && (
        <ShowCodeButton open={codeOpen} setOpen={setCodeOpen} />
      )} */}
    </div>
  );
}
