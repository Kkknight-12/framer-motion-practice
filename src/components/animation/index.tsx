import { AnimationTransition } from "./animation-transition";
import { EnterAnimations } from "./enter-animations";
import { ExitAnimations } from "./exit-animations";
import { Keyframes } from "./keyframes";
import { RotateAnimations } from "./rotate";
import { VariantsComponent } from "./variants";
import { WhileTapComponent } from "./while-tap";

export const Animation = () => {
  return (
    <>
      {/* Enter Animation */}
      <EnterAnimations />

      {/* Exit Animation */}
      <ExitAnimations />

      {/* Animation and Transition */}
      <AnimationTransition />

      {/* Keyframes */}
      <Keyframes />

      {/* Rotate */}
      <RotateAnimations />

      {/* While tap */}
      <WhileTapComponent />

      {/*   Variants */}
      <VariantsComponent />
    </>
  );
};