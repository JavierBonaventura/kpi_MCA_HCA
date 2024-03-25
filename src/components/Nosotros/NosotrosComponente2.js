import React from "react";
import map from "../../images/mapa-vinosluz.png";

function NosotrosComponente2() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  const gothamMedium = {
    fontFamily: "Gotham Medium",
  };

  return (
    <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl !py-10 lg:!py-20">
      <img src={map} alt="" className="lg:w-2/3 mx-auto" />
    </div>
  );
}

export default NosotrosComponente2;
