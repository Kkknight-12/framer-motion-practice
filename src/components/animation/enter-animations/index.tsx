/*
 * When a motion component is first created, it'll automatically animate to
 * the values in animate if they're different from those defined in style or
 * initial. You can set the initial prop to false to disable enter animations.
 *  */
import { motion } from "framer-motion";

export const EnterAnimations = () => {
  return (
    <>
      {/* Enter Animation*/}
      {/* When a motion component is first created, it'll automatically animate
      to the values in animate if they're different from those defined in style
      or initial. You can set the initial prop to false to disable enter animations.*/}
      <motion.p
        // When any value in animate changes, the component will automatically
        // animate to the updated target
        animate={{ x: 100 }}
        initial={false}
        // By default, Motion will create an appropriate animation
        // However, you can define different types of animations using the animation-transition prop
        transition={{ ease: "easeOut", duration: 2 }}
        className="read-the-docs"
      >
        Initial Animation False
      </motion.p>
    </>
  );
};