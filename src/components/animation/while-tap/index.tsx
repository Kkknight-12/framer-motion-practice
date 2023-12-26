// @flow
import { motion } from "framer-motion";
import * as React from "react";

export const WhileTapComponent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <motion.button
        whileTap={{ scale: 1.1 }}
        onClick={() => setCount((count) => count + 1)}
      >
        while tap animation {count}
      </motion.button>
    </>
  );
};