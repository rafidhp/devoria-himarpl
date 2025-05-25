import React from "react";
import { motion as Motion } from "framer-motion";

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
    <Motion.p variants={container} initial="hidden" whileInView={"show"} viewport={{ once: true }} className={className}>
      {parts.map((part, index) => {
        if (part.startsWith("<b>")) {
          const content = part.replace(/<\/?b>/g, "");
          const words = content.split(" ");
          return (
            <b key={index}>
              {words.map((word, i) => (
                <Motion.span key={i} variants={wordAnimation} style={{ display: "inline-block" }}>
                  {word}
                  {i !== words.length - 1 && "\u00A0"}
                </Motion.span>
              ))}
            </b>
          );
        }

        const words = part.split(" ");
        return (
          <React.Fragment key={index}>
            {words.map((word, i) => (
              <Motion.span key={i} variants={wordAnimation} style={{ display: "inline-block" }}>
                {word}
                {i !== words.length - 1 && "\u00A0"}
              </Motion.span>
            ))}
          </React.Fragment>
        );
      })}
    </Motion.p>
  );
};

export default AnimatedLongText;
