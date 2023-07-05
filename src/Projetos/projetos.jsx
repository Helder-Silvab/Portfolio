import React, { useEffect, useRef } from "react";
import { header } from "../components/header.jsx";
import { leftside } from "../components/leftside.jsx";
import { footer } from "../components/footer.jsx";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

function Projetos() {
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
                  Projetos
                </div>
              </div>
              <div className="label-size-16 labelColorWhite margin-top-15">
                Lista dos meus Projetos
              </div>
            </div>
            <div className="grid-1-1 grid-flex  margin-top-50">
              <div className="label-size-32 labelColorOrange label-weight-semibold">
                #
              </div>
              <div className="label-size-32 labelColorWhite label-weight-semibold">
                Projetos Completos
              </div>
            </div>
            <div className="grid-1-1 grid-flex margin-top-20">
              <motion.div
                className="grid-1-2 height320 borderGray1 height-reset border-radius-10"
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.5 }}>
                <div className="grid-1-1 height150 codeShieldLogo icon-align-center"></div>
                <div className="grid-1-1 grid-flex height30 borderGray1">
                  <div className="grid-1-3 labelColorGray label-size-12 margin-left-20">
                    ReactJS
                  </div>
                  <div className="grid-1-3 labelColorGray label-size-12 margin-left-30">
                    CSS
                  </div>
                  <div className="grid-1-3 labelColorGray label-size-12">
                    JavaScript
                  </div>
                </div>
                <div className="grid-1-1 labelColorWhite label-size-24 margin-top-10 margin-left-10 label-weight-medium">
                  CodeShield
                </div>
                <div className="grid-1-1 labelColorGray label-size-12 margin-left-10 margin-top-5">
                  Programa para encriptar e desencriptar dados
                </div>
                <div className="grid-1-1 grid-flex margin-top-15 margin-left-10">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://si-lime.vercel.app">
                    <div className="width140 padding5 borderOrange1 margin-top-15 hoverContacte border-radius-5 cursor-pointer">
                      <div className="grid-1-1 align-center labelColorWhite label-weight-medium">
                        Live Source
                      </div>
                    </div>
                  </a>
                  <div className="grid-flex-grow"></div>
                </div>
              </motion.div>
              <div className="grid-1-3"></div>
              <motion.div
                className="grid-1-2 height320 borderGray1 height-reset border-radius-10"
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.5 }}>
                <div className="grid-1-1 height150">
                  <div className="logoDiana icon-size-100 icon-align-center grid-1-1 height150"></div>
                </div>
                <div className="grid-1-1 grid-flex height30 borderGray1">
                  <div className="grid-1-3 labelColorGray label-size-12 margin-left-20">
                    HTML
                  </div>
                  <div className="grid-1-3 labelColorGray label-size-12 margin-left-30">
                    CSS
                  </div>
                  <div className="grid-1-3 labelColorGray label-size-12">
                    JavaScript
                  </div>
                </div>
                <div className="grid-1-1 labelColorWhite label-size-24 margin-top-10 margin-left-10 label-weight-medium">
                  Diana Soares Portfolio
                </div>
                <div className="grid-1-1 labelColorGray label-size-12 margin-left-10 margin-top-5">
                  Portfolio de uma designer
                </div>
                <div className="grid-1-1 grid-flex margin-top-15 margin-left-10">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://diana-one.vercel.app">
                    <div className="width140 padding5 borderOrange1 margin-top-15 hoverContacte border-radius-5 cursor-pointer">
                      <div className="grid-1-1 align-center labelColorWhite label-weight-medium">
                        Live Source
                      </div>
                    </div>
                  </a>
                  <div className="grid-flex-grow"></div>
                </div>
              </motion.div>
            </div>
            <div className="grid-1-1 grid-flex margin-top-20">
              <motion.div
                className="grid-1-2 height320 borderGray1 height-reset border-radius-10"
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.5 }}>
                <div className="grid-1-1 height150 logoCatarina icon-align-center icon-size-horizontal-200"></div>
                <div className="grid-1-1 grid-flex height30 borderGray1">
                  <div className="grid-1-3 labelColorGray label-size-12 margin-left-20">
                    HTML
                  </div>
                  <div className="grid-1-3 labelColorGray label-size-12 margin-left-30">
                    CSS
                  </div>
                  <div className="grid-1-3 labelColorGray label-size-12">
                    JavaScript
                  </div>
                </div>
                <div className="grid-1-1 labelColorWhite label-size-24 margin-top-10 margin-left-10 label-weight-medium">
                  Catarina Mendes Portfolio
                </div>
                <div className="grid-1-1 labelColorGray label-size-12 margin-left-10 margin-top-5">
                  Portfolio de uma designer
                </div>
                <div className="grid-1-1 grid-flex margin-top-15 margin-left-10">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://catarina-mendes.vercel.app">
                    <div className="width140 padding5 borderOrange1 margin-top-15 hoverContacte border-radius-5 cursor-pointer">
                      <div className="grid-1-1 align-center labelColorWhite label-weight-medium">
                        Live Source
                      </div>
                    </div>
                  </a>
                  <div className="grid-flex-grow"></div>
                </div>
              </motion.div>
              <div className="grid-1-3"></div>
              <motion.div
                className="grid-1-2 height320 borderGray1 height-reset border-radius-10"
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.5 }}>
                <div className="grid-1-1 height150">
                  <div className="logoDanielly icon-size-70 icon-align-center grid-1-1 height150"></div>
                </div>
                <div className="grid-1-1 grid-flex height30 borderGray1">
                  <div className="grid-1-3 labelColorGray label-size-12 margin-left-20">
                    HTML
                  </div>
                  <div className="grid-1-3 labelColorGray label-size-12 margin-left-30">
                    CSS
                  </div>
                  <div className="grid-1-3 labelColorGray label-size-12">
                    JavaScript
                  </div>
                </div>
                <div className="grid-1-1 labelColorWhite label-size-24 margin-top-10 margin-left-10 label-weight-medium">
                  Danielly Portfolio
                </div>
                <div className="grid-1-1 labelColorGray label-size-12 margin-left-10 margin-top-5">
                  Portfolio de uma designer
                </div>
                <div className="grid-1-1 grid-flex margin-top-15 margin-left-10">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://danielly.vercel.app">
                    <div className="width140 padding5 borderOrange1 margin-top-15 hoverContacte border-radius-5 cursor-pointer">
                      <div className="grid-1-1 align-center labelColorWhite label-weight-medium">
                        Live Source
                      </div>
                    </div>
                  </a>
                  <div className="grid-flex-grow"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="grid-1-1"></div>
      </div>
      <div>{footer()}</div>
    </>
  );
}

export default Projetos;
