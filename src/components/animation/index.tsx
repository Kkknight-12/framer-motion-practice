import { motion } from "framer-motion";

/* By default, Motion will create an appropriate animation for a snappy
 * animation-transition based on the types of value being animated. For instance,
 * physical properties like x or scale will be animated via a spring
 * simulation. Whereas values like opacity or color will be animated with a
 * tween.
 *
 * However, you can define different types of animation by passing a default
 * animation-transition to the animation-transition prop.
 * */

export const AnimationTransition = () => {
  return (
    <>
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: "orange",
          borderRadius: "50%",
        }}
        // initial: This sets the initial state of the element before the
        // animation starts. The opacity is set to 0 (completely
        // transparent) and the scale is set to 0.5 (half its original size).
        initial={{ opacity: 0, scale: 0.5 }}
        // animate: This sets the final state of the element after the
        // animation is complete. The opacity is set to 1 (completely
        // opaque) and the scale is set to 1 (original size).
        animate={{ opacity: 1, scale: 1 }}
        // animation-transition: This defines how the animation-transition from the initial
        // state to the final state should occur. The duration is set to
        // 0.8 seconds, the delay is set to 0.5 seconds (which means the
        // animation will start 0.5 seconds after the component is
        // rendered), and the ease property defines the rate of the change
        // of the animation over time. The array [0, 0.71, 0.2, 1.01] is a
        // cubic bezier curve that represents a specific easing function.
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        // animation-transition prop is used to animate the component
        // the duration for which the animation is performed control the speed
        //  delay, delays the animation start time
        transition={{ duration: 2, delay: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <h1>Vite + React</h1>
      </motion.div>

      {/*Animation and Transition*/}
      <motion.p
        // When any value in animate changes, the component will automatically
        // animate to the updated target
        animate={{ x: 100 }}
        // By default, Motion will create an appropriate animation
        // However, you can define different types of animations using the animation-transition prop
        transition={{ ease: "easeOut", duration: 2 }}
        className="read-the-docs"
      >
        Animation and Transition
      </motion.p>

      <motion.p
        // When any value in animate changes, the component will automatically
        // animate to the updated target
        animate={{ x: 100 }}
      >
        When any value in animate changes, the component will automatically
        animate to the updated target
      </motion.p>
    </>
  );
};