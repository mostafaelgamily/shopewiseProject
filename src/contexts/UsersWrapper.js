import React, { useEffect, useState } from "react";
import userContext from "../contexts/usersContext";
import axios from "axios";

const UsersWrapper = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("userProfile")) || null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((resp) => {
        setProfiles(resp.data);
        setLoading(false);
      })
      .catch((er) => {
        console.log(er);
        setLoading(false);
        setError(
          "Something Went Wrong, Check Your Internet Connection or Try Again Later"
        );
      });
  }, []);

  const handleLoginSuccess = (req) => {
    setIsLoggedIn(req);
    localStorage.setItem("isLoggedIn", JSON.stringify(req));
  };

  const handleSetUserProfile = (req) => {
    setUserProfile(req);
    localStorage.setItem("userProfile", JSON.stringify(req));
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userProfile");
  };
  return (
    <div>
      <userContext.Provider
        value={{
          loading,
          error,
          isLoggedIn,
          userProfile,
          handleSignOut,
          profiles,
          handleLoginSuccess,
          handleSetUserProfile,
        }}
      >
        {children}
      </userContext.Provider>
    </div>
  );
};

export default UsersWrapper;
