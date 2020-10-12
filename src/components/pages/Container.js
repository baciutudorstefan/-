import React from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import FooterComponent from "./FooterComponent";
import "../style/Container.css";
import "../style/RightComponent.css";
import "../style/LeftComponent.css";
import "../style/FooterComponent.css";
import "../style/MediaQueries.css";
function Container() {
  return (
    <div className="container">
      <LeftComponent />
      <RightComponent />
      <FooterComponent />
    </div>
  );
}

export default Container;
