import viteLogo from "*.svg";
import { motion } from "framer-motion";
import reactLogo from "../../../assets/react.svg";

{
  /*  */
}

export const RotateAnimations = () => {
  return (
    <>
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
    </>
  );
};