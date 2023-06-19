import React from "react";
import "./components.css";

export function header() {
  return (
    <div className="grid-1-1 grid-flex height70">
      <div className="logo icon-size-70 icon-align-center width70 height70"></div>
      <div className="labelColorWhite label-size-16 label-weight-semibold">
        Hélder Barbedo
      </div>
      <div className="grid-flex-grow"></div>
      <div className="display-flex width100">
        <div className="label-size-16 labelColorOrange label-weight-medium cursor-pointer">
          #
        </div>
        <div className="label-size-16 labelColorWhite label-weight-medium cursor-pointer">
          Home
        </div>
      </div>
      <div className="display-flex width110">
        <div className="label-size-16 labelColorOrange cursor-pointer">#</div>
        <div className="label-size-16 labelColorGray cursor-pointer hoverText">
          Projetos
        </div>
      </div>
      <div className="display-flex width130">
        <div className="label-size-16 labelColorOrange cursor-pointer">#</div>
        <div className="label-size-16 labelColorGray cursor-pointer hoverText">
          Sobre Mim
        </div>
      </div>
      <div className="display-flex width100">
        <div className="label-size-16 labelColorOrange cursor-pointer">#</div>
        <div className="label-size-16 labelColorGray cursor-pointer hoverText">
          Contactos
        </div>
      </div>
    </div>
  );
}
