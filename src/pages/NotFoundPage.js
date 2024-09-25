import React from "react";
import NavSpacer from "../components/navSpacer/NavSpacer";
import LgButton from "../components/button/LgButton";

const NotFoundPage = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--background-color) ",
        color: "var(--text-color)",
        paddingBottom: "20px",
      }}
    >
      <NavSpacer />
      <h3>Page Not Found</h3>
      <LgButton name="Home" />
    </div>
  );
};

export default NotFoundPage;
