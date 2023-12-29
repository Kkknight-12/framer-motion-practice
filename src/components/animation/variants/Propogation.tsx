/*
 * Propagation :
 * Propagation in the context of Framer Motion refers to the process where
 * changes in a variant of a parent motion component are passed down or "propagated"
 * to its child components. This happens unless a child component defines its own
 * animate property, which would override the inherited animation.
 *
 * In the provided code, the motion.nav component has an animate property that is set
 * to either "openState" or "closedState". This state is propagated to its child
 * components, such as motion.button and motion.ul.
 *
 * For example, when the motion.nav component's animate property is set to "openState",
 * the motion.button and motion.ul components will also animate according to the "openState"
 * variant, unless they have their own animate property defined.
 *
 * This propagation allows for complex animations to be defined in a declarative and
 * hierarchical manner, making it easier to manage and understand the animation
 * flow in your components.
 * */
import { useState } from "react";
import { motion } from "framer-motion";

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export const AnimationPropogationComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      // class defined here can be used in variants
      animate={isOpen ? "openState" : "closedState"}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: "yellow" }}
      >
        Menu
        <motion.div
          variants={{
            // class defined above used here in variant
            openState: {
              rotate: 180,
              // we can define any css property here
              backgroundColor: "red",
            },
            closedState: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={list}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li variants={item}>Item 1 </motion.li>
        <motion.li variants={item}>Item 2 </motion.li>
        <motion.li variants={item}>Item 3 </motion.li>
        <motion.li variants={item}>Item 4 </motion.li>
        <motion.li variants={item}>Item 5 </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
