import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/*  Framer motion animation */}
          <motion.img
            animate={{ rotate: 360 }}
            //  repeat the animation infinitely
            //  ease: "linear" makes the animation smooth
            //  duration: 20, makes the animation slow
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>

        {/*  Plain css Animation*/}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        // transition prop is used to animate the component
        // the duration for which the animation is performed control the speed
        //  delay, delays the animation start time
        transition={{ duration: 2, delay: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <h1>Vite + React</h1>
      </motion.div>
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
      <motion.p
        // When any value in animate changes, the component will automatically
        // animate to the updated target
        animate={{ x: 100 }}
      >
        When any value in animate changes, the component will automatically
        animate to the updated target
      </motion.p>
      {/*Animation and Transition*/}
      <motion.p
        // When any value in animate changes, the component will automatically
        // animate to the updated target
        animate={{ x: 100 }}
        // By default, Motion will create an appropriate animation
        // However, you can define different types of animations using the transition prop
        transition={{ ease: "easeOut", duration: 2 }}
        className="read-the-docs"
      >
        Animation and Transition
      </motion.p>
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
        // However, you can define different types of animations using the transition prop
        transition={{ ease: "easeOut", duration: 2 }}
        className="read-the-docs"
      >
        Initial Animation False
      </motion.p>
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
          ease: "easeInOut",
          // This array specifies at what proportion of the duration each keyframe
          // should occur. For example, the second keyframe will occur at 20% of
          // the total duration, the third at 50%, and so on.
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          // repeatDelay: There will be a 1-second delay between each repetition of
          // the animation.
          repeatDelay: 1,
        }}
      />
    </>
  );
}

export default App;
