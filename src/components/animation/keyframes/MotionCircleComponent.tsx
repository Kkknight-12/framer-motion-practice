import { motion } from "framer-motion";

export const MotionCircleComponent = () => {
  return (
    <div style={{ marginTop: 50 }}>
      {/*
       Each keyframe will be spaced evenly throughout the animaton.
       You can override this by setting the times option via transition.

       times is an array of the same length as the keyframes array,
       with numbers between 0 and 1 definining where in the animation
       each keyframe should be hit.
      */}
      <svg height="100" width="100%">
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="yellow"
          animate={{ cx: [0, 100, 200] }}
          transition={{ duration: 3, times: [0, 0.2, 1] }}
        />
      </svg>
      <svg height="100" width="100%">
        <motion.circle
          fill="purple"
          cx={500}
          cy="50"
          r="40"
          animate={{ cx: [null, 100, 200] }}
          transition={{ duration: 3, times: [0, 0.2, 1] }}
        />
      </svg>
    </div>
  );
};