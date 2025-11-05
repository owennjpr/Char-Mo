import React, { useRef } from "react";
import { motion } from "motion/react";
interface MorphButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  morph: boolean;
  setMorph: (arg: boolean) => void;
}
const MorphButton = (props: MorphButtonProps) => {
  const { morph, setMorph, ...rest } = props;
  const count = useRef(0);
  return (
    <div {...rest}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-left-right cursor-pointer"
        viewBox="0 0 16 16"
        onClick={() => {
          count.current += 1;
          setMorph(!morph);
        }}
        animate={{ rotateY: 180 * count.current }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <path
          fillRule="evenodd"
          d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
        />
      </motion.svg>
    </div>
  );
};

export default MorphButton;
