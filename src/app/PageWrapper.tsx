// app/components/PageWrapper.tsx
"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="w-full h-screen flex flex-row gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
        {pathname !== "/" && (
          <motion.div
            key={"code-pane"}
            className="p-4 w-1/2 bg-[#0002]"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          ></motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
