import { motion as Motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AnimatedText2 = ({ text, className = "", style = {} }) => {
  return (
    <Motion.div variants={container} initial="hidden" whileInView={"show"} viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
      <Motion.h1 className={`${className}`} style={style}>
        {text.split("").map((char, index) => (
          <Motion.span key={`char-${index}`} variants={wordAnimation}>
            {char === " " ? "\u00A0" : char}
          </Motion.span>
        ))}
      </Motion.h1>
    </Motion.div>
  );
};

export default AnimatedText2;
