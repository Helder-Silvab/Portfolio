import React from "react";
import "./home.css";
import { header } from "../components/header.jsx";
import { leftside } from "../components/leftside.jsx";
import { footer } from "../components/footer.jsx";

function Home() {
  return (
    <>
      <div className="grid">
        <div className="grid-1-1">{leftside()}</div>
        <div className="grid-1-1">
          {/* header */}
          {header()}
          {/* header */}
          {/* body */}
          <div className="grid-1-1 grid-flex">
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
              <div className="width200 padding5 borderOrange1 margin-top-15 hoverContacte border-radius-5">
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
          </div>

          {/* Projetos */}
          <div className="grid-1-1 margin-top-100">
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
          </div>
          {/* Projetos */}

          {/* Skills */}
          <div className="grid-1-1 margin-top-100">
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
          </div>
          {/* Skills */}

          {/* Sobre Mim */}
          <div className="grid-1-1 margin-top-100">
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
          </div>
          {/* Sobre Mim  */}

          {/* Contactos */}
          <div className="grid-1-1 margin-top-100">
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
          </div>
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
