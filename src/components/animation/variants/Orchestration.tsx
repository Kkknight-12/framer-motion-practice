import { useState } from "react";
import { motion } from "framer-motion";

/*
 * Orchestration in the context of Framer Motion refers to the process of
 * controlling the sequence, timing, and other aspects of multiple animations.
 * It allows you to define how animations interact with each other, such as
 * starting one animation after another has finished, or starting several
 * animations at the same time but with different delays.
 *
 * In the provided code, orchestration is demonstrated through the use of the
 * `transition` property in the `variants` object. The `transition` property
 * is used to define the timing and easing of the animation.
 *
 * For example, in the `list` object, the `visible` variant has a `transition`
 * property that specifies `when: "beforeChildren"` and `staggerChildren: 0.3`.
 * This means that when the `motion.ul` component's `animate` property is set
 * to "visible", the animation of the `motion.ul` component will start before
 * its children (the `motion.li` components), and the animations of the child
 * components will be staggered by 0.3 seconds.
 *
 * On the other hand, the `hidden` variant of the `list` object has a `transition`
 * property that specifies `when: "afterChildren"`. This means that when the `motion.ul`
 * component's `animate` property is set to "hidden", the animation of the `motion.ul`
 * component will start after all its child components have finished their animations.
 *
 * This orchestration allows for complex animations to be defined in a declarative
 * and hierarchical manner, making it easier to manage and understand the animation
 * flow in your components.
 * */
const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      /*
       * staggerChildren: 0.3 means that there will be a 0.3-second delay between the
       * start of the animation of each child component. This creates a staggered
       * animation effect where each child component starts its animation 0.3 seconds
       * after the previous one
       * */
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export const AnimationOrchestrationComponent = () => {
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
