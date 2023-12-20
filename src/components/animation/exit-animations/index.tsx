/*
 *
 *  */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const ExitAnimations = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {/* Exit Animation*/}
      {/* In React, when a component is removed from the tree, it's removed instantly.
      Framer Motion provides the AnimatePresence component to keep components in the DOM
       while they perform an exit animation..*/}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={() => setIsVisible(false)}>bye</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};