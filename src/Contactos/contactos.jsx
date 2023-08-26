import React, { useEffect, useRef } from "react";
import { header } from "../components/header.jsx";
import { leftside } from "../components/leftside.jsx";
import { footer } from "../components/footer.jsx";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

function contactos() {
  return (
    <>
      <div className="grid">
        <div className="grid-1-1">{leftside()}</div>
        <div className="grid-1-1">
          {/* header */}
          {header()}
          {/* header */}
          <motion.div
            className="grid-1-1"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25, duration: 0.5 }}>
            <div className="grid-1-2 margin-top-100 zindex-999">
              <div className="grid-1-1 grid-flex">
                <div className="label-size-32 labelColorOrange label-weight-semibold">
                  /
                </div>
                <div className="label-size-32 labelColorWhite label-weight-semibold">
                  Contactos
                </div>
              </div>
              <div className="label-size-16 labelColorWhite margin-top-15">
                Quem eu sou?
              </div>
            </div>
            <div className="grid-1-1 margin-top-20">
              <div className="label-size-16 labelColorGray margin-top-15">
                Estou interessado em oportunidades freelance. Se tiver algum
                pedido ou questão, não hesite em contactar me
              </div>
            </div>
          </motion.div>
        </div>
        <div className="grid-1-1"></div>
      </div>
      <div>{footer()}</div>
    </>
  );
}

export default contactos;
