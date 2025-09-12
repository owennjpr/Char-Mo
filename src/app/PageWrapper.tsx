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
  const isHomePage = pathname === "/";

  return (
    <div className="w-full h-screen flex flex-row gap-1 overflow-hidden">
      {/* Left content area - always present */}
      <div className="w-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {!isHomePage && (
          <motion.div
            key="code-pane"
            className="p-4 w-1/2 bg-[#0002]"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              opacity: { duration: 0.1 },
            }}
          >
            {/* Code panel content could go here */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
