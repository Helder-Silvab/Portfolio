import React from "react";
import "./components.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function header() {
  return (
    <motion.div
      className="grid-1-1 grid-flex height70 zindex-999"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.25, duration: 0.5 }}>
      <div className="logo icon-size-70 icon-align-center width70 height70"></div>
      <div className="labelColorWhite label-size-16 label-weight-semibold">
        Hélder Barbedo
      </div>
      <div className="grid-flex-grow"></div>
      <div className="display-flex width100 cursor-pointer">
        <div className="label-size-16 labelColorOrange cursor-pointer">
          <Link to="/">#</Link>
        </div>
        <div className="label-size-16 labelColorGray cursor-pointer">
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="display-flex width110 cursor-pointer">
        <div className="label-size-16 labelColorOrange cursor-pointer">
          <Link to="/Projetos">#</Link>
        </div>
        <div className="label-size-16 labelColorGray cursor-pointer hoverText">
          <Link to="/Projetos">Projetos</Link>
        </div>
      </div>
      <div className="display-flex width130 cursor-pointer">
        <div className="label-size-16 labelColorOrange cursor-pointer">#</div>
        <div className="label-size-16 labelColorGray cursor-pointer hoverText">
          Sobre Mim
        </div>
      </div>
      <div className="display-flex width100 cursor-pointer">
        <div className="label-size-16 labelColorOrange cursor-pointer">
          <Link to="/Contactos">#</Link>
        </div>
        <div className="label-size-16 labelColorGray cursor-pointer hoverText">
          <Link to="/Contactos">Contactos</Link>
        </div>
      </div>
    </motion.div>
  );
}
