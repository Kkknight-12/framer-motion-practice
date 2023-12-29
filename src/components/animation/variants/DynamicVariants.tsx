import { useState } from "react";
import { motion, Variants } from "framer-motion";

/*
 * Dynamic variants in Framer Motion allow you to create animations that
 * depend on dynamic data or state. They are functions that return a variant
 * object, and they receive the `custom` prop as an argument.
 * In the selected code:
 *
 * The `visible` variant is a function that takes an argument `i`
 * (which is passed through the `custom` prop in the `motion.li` component)
 * and returns an object that defines the animation.
 *
 * The returned object sets the `opacity` to `1`, making the element fully
 * visible. The `transition` property is used to define how the animation
 * transitions from one state to another. In this case, it sets a `delay`
 * for the animation that is equal to `i * 0.3`. This means that the delay
 * before the animation starts will be different for each `motion.li`
 * component, depending on the value of `i`. This creates a staggered
 * animation effect where each item starts its animation after a delay,
 * creating a visually appealing sequence.
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

const item: Variants = {
  // visible: { opacity: 1, x: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      // each item will have a delay of 0.3 seconds more than the previous one
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0, x: -100 },
};

export const AnimationDynamicComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const arr =[...Array(5).keys()] // [0,1,2,3,4]

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
        {[...Array(5).keys()].map((i) => (
          <motion.li key={i} custom={i} variants={item}>
            Item {i + 1}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
