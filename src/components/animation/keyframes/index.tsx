// @flow
import { motion } from "framer-motion";
import { MotionCircleComponent } from "./MotionCircleComponent";

export const Keyframes = () => {
  return (
    <>
      {/*  Keyframes */}
      {/* Values in animate can also be set as a series of keyframes. This*/}
      {/*will animate through each value in sequence.*/}
      <motion.div
        style={{
          width: "200px",
          height: "200px",
          background: "red",
          marginTop: 170,
        }}
        // scale: The component's scale starts at 1, grows to 2, stays at 2,
        // shrinks back to 1, and finally returns to its original scale of 1.
        // rotate: The component starts with a rotation of 0 degrees, stays at 0,
        // rotates to 180 degrees, stays at 180, and finally returns to 0 degrees.
        // borderRadius: The component's border radius starts at 0%, stays at 0%,
        // grows to 50%, stays at 50%, and finally returns to 0%.
        animate={{
          // scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut", // This array specifies at what proportion of the duration each keyframe
          // should occur. For example, the second keyframe will occur at 20% of
          // the total duration, the third at 50%, and so on.
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity, // repeatDelay: There will be a 1-second delay between each repetition of
          // the animation.
          repeatDelay: 1,
        }}
      />

      {/* Circle */}
      <MotionCircleComponent />
    </>
  );
};