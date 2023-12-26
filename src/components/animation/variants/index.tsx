/*
 * Setting animate as an object is useful for simple, single-component
 * animations. But sometimes we want to create animations that propagate
 * throughout the DOM, and orchestrate those animations in a declarative way.
 * We can do so with variants.
 *  */
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import "./styles.css";

const itemVariants: Variants = {
  openState: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closedState: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const VariantsComponent = () => {
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
        variants={{
          openState: {
            //  the entire element is shown.
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closedState: {
            // most of the element is clipped and not visible
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>Item 1 </motion.li>
        <motion.li variants={itemVariants}>Item 2 </motion.li>
        <motion.li variants={itemVariants}>Item 3 </motion.li>
        <motion.li variants={itemVariants}>Item 4 </motion.li>
        <motion.li variants={itemVariants}>Item 5 </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

/*
 * The clipPath property in CSS is used to define a clipping region that sets
 * what part of an element should be shown. The inset() function creates a
 * rectangle that is used to clip the region of an element.
 *
 * The inset() function takes four values, which represent the
 * top, right, bottom, and left offsets of the clipping region from the edge
 * of the element, respectively. These values can be specified in percentages
 * or absolute units. A fifth value can be added to create rounded corners.
 *
 * In above code, we have two clipPath properties:
 *
 * clipPath: "inset(0% 0% 0% 0% round 10px)": This means that the clipping
 * region starts 0% from the top, right, bottom, and left edges of the
 * element, effectively showing the entire element. The round 10px part means
 * that the corners of the clipping region are rounded with a radius of 10px.
 *
 * clipPath: "inset(10% 50% 90% 50% round 10px)": This means that the
 * clipping region starts 10% from the top, 50% from the right, 90% from the
 * bottom, and 50% from the left edge of the element. This will clip most of
 * the element, showing only a small portion in the center. The corners of
 * the clipping region are also rounded with a radius of 10px.
 *  */