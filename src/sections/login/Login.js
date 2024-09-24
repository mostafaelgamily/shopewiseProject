import React, { useEffect, useState } from "react";
import styles from "./login.module.css";

const Login = ({ profilesData, onLoginSuccess, setTargetProfile }) => {
  const [profiles, setProfiles] = useState();
  const [checkProfile, setCheckProfile] = useState({});

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // const formData = new FormData(e.target);
  //   // console.log(formData.get("file"));
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    for (let i = 0; i < profiles.length; i++) {
      if (checkProfile.username === profiles[i].username) {
        if (checkProfile.password === profiles[i].password) {
          console.log(profiles[i].name);
          onLoginSuccess(true);
          setTargetProfile(profiles[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    setProfiles(profilesData);
  }, [profilesData]);

  return (
    <div className={styles.login_container}>
      <div className={styles.login_content_container}>
        <div className={styles.login_box}>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="username"
              placeholder="Your Username"
              name="username"
              onChange={(e) => {
                setCheckProfile({ ...checkProfile, username: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setCheckProfile({ ...checkProfile, password: e.target.value });
              }}
            />
            <input
              type="submit"
              placeholder="Log In"
              className={styles.login_submit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
