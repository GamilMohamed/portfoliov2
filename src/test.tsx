import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';


export interface Anim {
  hidden: { opacity: number; x: number; rotateX: number };
  visible: { opacity: number; x: number; rotateX: number };
}

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  bottom?: string;
  top?: string;
  right?: string;
  left?: string;
  animation: any;
  transition: any;
  id?: string;
}

// const animation: Anim = {
//   hidden: { opacity: 0, x: 75, rotateX: 92 },
//   visible: { opacity: 1, x: 0, rotateX: 0 },
// };


export const Reveal = ({ children, width = "fit-content", bottom, top, right, left, animation, transition }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ width, bottom, top, right, left, overflow:"hidden" }}>
      <motion.div 
      variants={{
        hidden: animation.hidden,
        visible: animation.visible,
        // hidden: { opacity: 0, x: 75, rotateX: 92 },
        // visible: { opacity: 1, x: 0, rotateX: 0 },
      }}
      initial="hidden"
      animate={mainControls} //
      // transition={{ duration: 0.5, delay: 0.45 }}
      transition={transition}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          right : 0,
          left: 0,
          width: "100%",
          height: "100%",
          // backgroundColor: "rgba(255, 255, 5, 1)",
          zIndex: 10,
        }}
      />
    </div>
  );
}