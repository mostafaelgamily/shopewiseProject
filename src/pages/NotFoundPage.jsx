import NavSpacer from "../components/navSpacer/NavSpacer";
import LgButton from "../components/button/LgButton";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--background-color) ",
        color: "var(--text-color)",
        paddingBottom: "20px",
        textAlign: "center",
      }}
    >
      <NavSpacer />
      <h3 style={{ marginBottom: "20px" }}>Page Not Found</h3>
      <Link to={"/"}>
        <LgButton name="Home" />
      </Link>
    </div>
  );
};

export default NotFoundPage;
