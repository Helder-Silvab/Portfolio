import React from "react";
import { motion } from "framer-motion";

export function leftside() {
  return (
    <motion.div
      className="align-center fixedElement"
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.25, duration: 0.5 }}>
      <div className="line"></div>
      <div className="github icon-size-24 icon-align-center width30 height30 margin-top-10 margin-left-25 cursor-pointer"></div>
      <div className="wpp icon-size-24 icon-align-center width30 height30 margin-top-10 margin-left-25 cursor-pointer"></div>
      <div className="linkedin icon-size-24 icon-align-center width30 height30 margin-top-10 margin-left-25 cursor-pointer"></div>
    </motion.div>
  );
}
