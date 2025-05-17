import { motion } from "framer-motion";
import React from "react";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AnimatedLongText = ({ text, className = "" }) => {
  const parts = text.split(/(<b>.*?<\/b>)/g);

  return (
    <motion.p variants={container} initial="hidden" whileInView={"show"} viewport={{ once: true }} className={className}>
      {parts.map((part, index) => {
        if (part.startsWith("<b>")) {
          const content = part.replace(/<\/?b>/g, "");
          const words = content.split(" ");
          return (
            <b key={index}>
              {words.map((word, i) => (
                <motion.span key={i} variants={wordAnimation} style={{ display: "inline-block" }}>
                  {word}
                  {i !== words.length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </b>
          );
        }

        const words = part.split(" ");
        return (
          <React.Fragment key={index}>
            {words.map((word, i) => (
              <motion.span key={i} variants={wordAnimation} style={{ display: "inline-block" }}>
                {word}
                {i !== words.length - 1 && "\u00A0"}
              </motion.span>
            ))}
          </React.Fragment>
        );
      })}
    </motion.p>
  );
};

export default AnimatedLongText;
