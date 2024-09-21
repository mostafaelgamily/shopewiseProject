import React from "react";
import NavSpacer from "../components/navSpacer/NavSpacer";
import LgButton from "../components/button/LgButton";

const NotFoundPage = () => {
  return (
    <div>
      <NavSpacer />
      <h3>Page Not Found</h3>
      <LgButton name="Home" />
    </div>
  );
};

export default NotFoundPage;
