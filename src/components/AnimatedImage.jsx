import { motion as Motion } from "motion/react";

const AnimatedImage = ({
  src,
  alt,
  className = "",
  animationType = "fadeIn", // fadeIn, slideUp, scale, slideLeft, slideRight
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
}) => {
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <Motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px -100px 0px", amount: threshold }} transition={{ duration, delay }} variants={animations[animationType]}>
      <img src={src} alt={alt} className={className} loading="lazy" />
    </Motion.div>
  );
};

export default AnimatedImage;
