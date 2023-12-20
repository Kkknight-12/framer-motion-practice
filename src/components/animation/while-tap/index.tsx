// @flow
import { motion } from "framer-motion";
import * as React from "react";

export const Index = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="card">
        <motion.button
          whileTap={{ scale: 1.1 }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </motion.button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};