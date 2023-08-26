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
            <div className="grid-1-1 grid-flex margin-top-20">
              <div className="grid-1-1 label-size-16 labelColorGray margin-top-15">
                Estou interessado em oportunidades freelance. <br />
                No entanto, se você tiver outro pedido ou pergunta, <br />
                não hesite em contactar-me
              </div>
              <div className="grid-1-1">
                <div
                  className="width230 height120 height-reset borderGray1  border-radius-5 padding10"
                  ref={Contactosref}
                  variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlsContactos}
                  transition={{ delay: 0.2, duration: 0.5 }}>
                  <div className="grid-1-1 labelColorWhite label-size-16 label-weight-semibold">
                    Contacte me aqui!!!
                  </div>
                  <div className="grid-1-1 grid-flex margin-top-10">
                    <div className="linkedin icon-size-20 icon-align-center width15 height15 margin-top-5"></div>
                    <div className="grid-flex-grow height30 labelColorGray label-size-14 margin-left-5">
                      Hélder Barbedo
                    </div>
                  </div>
                  <div className="grid-1-1 grid-flex">
                    <div className="wpp icon-size-20 icon-align-center width15 height15 margin-top-5"></div>
                    <div className="grid-flex-grow height30 labelColorGray label-size-14 margin-left-5">
                      +351 912911029
                    </div>
                  </div>
                  <div className="grid-1-1 grid-flex">
                    <div className="email icon-size-20 icon-align-center width15 height15 margin-top-5"></div>
                    <div className="grid-flex-grow height30 labelColorGray label-size-14 margin-left-5">
                      helderbarbedowork@gmail.com
                    </div>
                  </div>
                </div>
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
