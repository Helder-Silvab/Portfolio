import React, { useEffect, useRef } from "react";
import "./home.css";
import { header } from "../components/header.jsx";
import { leftside } from "../components/leftside.jsx";
import { footer } from "../components/footer.jsx";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
function Home() {
  const ref = useRef(null);
  const SobreMimref = useRef(null);
  const Contactosref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInViewSobreMim = useInView(SobreMimref, { once: true });
  const isInViewContactos = useInView(Contactosref, { once: true });

  const mainControls = useAnimation();
  const mainControlsSobreMim = useAnimation();
  const mainControlsContactos = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (isInViewSobreMim) {
      mainControlsSobreMim.start("visible");
    }
    if (isInViewContactos) {
      mainControlsContactos.start("visible");
    }
  }, [isInView, isInViewSobreMim, isInViewContactos]);

  return (
    <>
      <div className="grid">
        <div className="grid-1-1">{leftside()}</div>
        <div className="grid-1-1">
          {/* header */}
          {header()}
          {/* header */}
          {/* body */}
          <motion.div
            className="grid-1-1 grid-flex"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25, duration: 0.5 }}>
            <div className="grid-1-2 margin-top-100">
              <div className="grid-1-1 grid-flex">
                <div className="label-size-32 labelColorWhite label-weight-semibold">
                  Hélder é um{" "}
                </div>
                <div className="titleHelder margin-left-5 label-weight-semibold">
                  Des
                </div>
              </div>
              <div className="label-size-16 labelColorGray margin-top-15">
                Ele constroi websites responsivos e criativos
              </div>
              <div className="width200 padding5 borderOrange1 margin-top-15 hoverContacte border-radius-5 cursor-pointer">
                <div className="grid-1-1 align-center labelColorWhite label-weight-medium">
                  Contacte me!!!
                </div>
              </div>
            </div>
            <div className="grid-1-2">
              <div className="grid-1-1 eu eufoto height400 icon-align-center"></div>
              <div className="grid-1-1 display-flex padding5 borderGray1 border-radius-5">
                <div className="label-size-14 labelColorOrange label-weight-medium">
                  #
                </div>
                <div className="label-size-14 labelColorGray label-weight-medium">
                  Atualmente a trabalhar no
                </div>
                <div className="label-size-14 labelColorWhite label-weight-medium margin-left-5">
                  Portfolio
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projetos */}
          <motion.div
            className="grid-1-1 margin-top-100"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25, duration: 0.5 }}>
            <div className="grid-1-1 grid-flex">
              <div className="label-size-32 labelColorOrange label-weight-medium">
                #
              </div>
              <div className="label-size-32 labelColorWhite label-weight-medium">
                Projetos
              </div>
              <div className="lineOrange margin-top-20 margin-left-10"></div>
              <div className="grid-flex-grow"></div>
              <div className="labelColorWhite label-size-16 margin-top-5 label-weight-medium">
                Ver todos{" "}
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
                  <div class="logoDiana icon-size-100 icon-align-center grid-1-1 height150"></div>
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
          </motion.div>
          {/* Projetos */}

          {/* Skills */}
          <motion.div
            className="grid-1-1 margin-top-100"
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 0.25, duration: 0.5 }}>
            <div className="grid-1-1 grid-flex">
              <div className="grid-flex-grow"></div>
              <div className="lineOrange margin-top-20 margin-right-10"></div>
              <div className="label-size-32 labelColorOrange label-weight-medium">
                #
              </div>
              <div className="label-size-32 labelColorWhite label-weight-medium">
                Skills
              </div>
            </div>
            <div className="grid-1-1 grid-flex margin-top-20">
              <div className="grid-1-1">
                <div className="grid-1-1 grid-flex">
                  <div className="grid-1-1">
                    <motion.div
                      className="grid-1-1"
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ delay: 0.25, duration: 0.5 }}>
                      <div className="grid-1-1 height70 height-reset borderGray1 border-radius-5">
                        <div className="grid-1-1 height30 borderBottomGray">
                          <div className="labelColorWhite label-weight-medium label-size-16 margin-left-5">
                            Ferramentas
                          </div>
                        </div>
                        <div className="grid-1-1 grid-flex padding10">
                          <div className="grid-1-1 labelColorGray label-size-12">
                            Git
                          </div>
                          <div className="grid-1-1 labelColorGray label-size-12">
                            Vscode
                          </div>
                          <div className="grid-1-1 labelColorGray label-size-12 align-center">
                            Figma
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="grid-1-1 margin-top-20"
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ delay: 0.25, duration: 0.5 }}>
                      <div className="grid-1-1 height70 height-reset borderGray1 border-radius-5">
                        <div className="grid-1-1 height30 borderBottomGray">
                          <div className="labelColorWhite label-weight-medium label-size-16 margin-left-5">
                            FrameWork
                          </div>
                        </div>
                        <div className="grid-1-1 grid-flex padding10">
                          <div className="grid-1-1 labelColorGray label-size-12">
                            React
                          </div>
                          <div className="grid-flex-grow"></div>
                          <div className="grid-1-1 labelColorGray label-size-12 align-right">
                            Vite
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    className="grid-1-1 margin-left-20 margin-right-20"
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: -100 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ delay: 0.25, duration: 0.5 }}>
                    <div className="grid-1-1">
                      <div className="width200 height150 height-reset borderGray1 border-radius-5">
                        <div className="grid-1-1 height30 borderBottomGray">
                          <div className="labelColorWhite label-weight-medium label-size-16 margin-left-5">
                            Ferramentas
                          </div>
                        </div>
                        <div className="grid-1-1 grid-flex padding10">
                          <div className="grid-1-1 labelColorGray label-size-12">
                            HTML
                          </div>
                          <div className="grid-flex-grow"></div>
                          <div className="grid-1-1 labelColorGray label-size-12 align-right">
                            Css
                          </div>
                        </div>
                        <div className="grid-1-1 grid-flex padding10">
                          <div className="grid-1-1 labelColorGray label-size-12">
                            SQL
                          </div>
                          <div className="grid-flex-grow"></div>
                          <div className="grid-1-1 labelColorGray label-size-12 align-right">
                            PHP
                          </div>
                        </div>
                        <div className="grid-1-1 grid-flex padding10">
                          <div className="grid-1-1 labelColorGray label-size-12">
                            JS
                          </div>
                          <div className="grid-flex-grow"></div>
                          <div className="grid-1-1 labelColorGray label-size-12 align-right">
                            C/C++
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-1-1 margin-top-20">
                      <div className="width200 height70 height-reset borderGray1 border-radius-5">
                        <div className="grid-1-1 height30 borderBottomGray">
                          <div className="labelColorWhite label-weight-medium label-size-16 margin-left-5">
                            Base de Dados
                          </div>
                        </div>
                        <div className="grid-1-1 grid-flex padding10">
                          <div className="grid-1-1 labelColorGray label-size-12">
                            SQL
                          </div>
                          <div className="grid-flex-grow"></div>
                          <div className="grid-1-1 labelColorGray label-size-12 align-right">
                            MariaDB
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="width800">
                <div className="logoWhitDots height400 icon-align-center"></div>
              </div>
            </div>
          </motion.div>
          {/* Skills */}

          {/* Sobre Mim */}
          <motion.div
            ref={SobreMimref}
            className="grid-1-1 margin-top-100"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControlsSobreMim}
            transition={{ delay: 0.25, duration: 0.5 }}>
            <div className="grid-1-1 grid-flex">
              <div className="label-size-32 labelColorOrange label-weight-medium">
                #
              </div>
              <div className="label-size-32 labelColorWhite label-weight-medium">
                Sobre Mim
              </div>
              <div className="lineOrange margin-top-20 margin-left-10"></div>
              <div className="grid-flex-grow"></div>
            </div>
            <div className="grid-1-1 grid-flex margin-top-20">
              <div className="grid-1-2">
                <div className="grid-1-1 eu eufoto height400 icon-align-center"></div>
              </div>
              <div className="grid-1-2">
                <div className="grid-1-1 labelColorGray label-size- margin-top-30">
                  Ola, eu sou o Helder! <br />
                  <br />
                  Sou um desenvolvedor front-end e designer alocado no
                  Porto,Portugal. Posso desenvolver sites responsivos a partir
                  do zero e transforma-los em experencias web modernas e faceis
                  de usar. <br />
                  <br />
                  Transformar a minha criatividade e conhecimento em sites tem
                  sido a minha paixao nos ultimos anos. Tenho ajudado varias
                  pessoas a estabelecer a sua presensa online.
                </div>
                <div className="grid-1-1 grid-flex margin-top-15">
                  <div className="grid-flex-grow"></div>
                  <div className="width200 padding5 borderOrange1 margin-top-15 hoverContacte border-radius-5 cursor-pointer">
                    <div className="grid-1-1 align-center labelColorWhite label-weight-medium">
                      Ler Mais
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Sobre Mim  */}

          {/* Contactos */}
          <motion.div
            className="grid-1-1 margin-top-100 margin-bottom-50"
            ref={Contactosref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControlsContactos}
            transition={{ delay: 0.25, duration: 0.5 }}>
            <div className="grid-1-1 grid-flex">
              <div className="grid-flex-grow"></div>
              <div className="lineOrange margin-top-20 margin-right-10"></div>
              <div className="label-size-32 labelColorOrange label-weight-medium">
                #
              </div>
              <div className="label-size-32 labelColorWhite label-weight-medium">
                Contactos
              </div>
            </div>
            <div className="grid-1-1 grid-flex margin-top-20">
              <div className="grid-1-2">
                <div className="grid-1-1 labelColorGray label-size-16 margin-top-30">
                  Estou interessado em oportunidades freelance. <br />
                  No entanto, se você tiver outro pedido ou pergunta, <br />
                  não hesite em contactar-me
                </div>
              </div>
              <div className="grid-1-2 grid-flex">
                <div className="grid-flex-grow"></div>
                <motion.div
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
                </motion.div>
              </div>
            </div>
          </motion.div>
          {/* Contactos */}

          {/* body */}
        </div>
        <div></div>
      </div>
      <div>{footer()}</div>
    </>
  );
}

export default Home;
