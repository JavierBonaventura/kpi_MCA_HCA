import React from "react";

function Wa() {
  return (
    <div className="absolute top-20 bg-red-500 z-50">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone="
        className="float bounce"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
}

export default Wa;
