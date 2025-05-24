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
    <motion.div variants={container} initial="hidden" whileInView={"show"} viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
      <motion.h1 className={`${className}`} style={style}>
        {text.split("").map((char, index) => (
          <motion.span key={`char-${index}`} variants={wordAnimation}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedText2;
