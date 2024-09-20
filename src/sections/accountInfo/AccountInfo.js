import React, { useEffect, useState } from "react";
import styles from "./accountInfo.module.css";

const AccountInfo = ({ profileData, onSignOut }) => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProfile(profileData);
    if (profileData) {
      setLoading(false);
    }
    console.log(profile);
  }, [profileData, profile]);

  if (loading)
    return (
      <div style={{ padding: "50px" }}>
        <h3>Loading...</h3>
      </div>
    );

  return (
    <div className={styles.account_info_container}>
      <div className={styles.account_info_content_container}>
        <h2>General Info</h2>
        <p>Username: {profile.username}</p>
        <p className={styles.capitalize}>
          Name: {profile.name.firstname} {profile.name.lastname}
        </p>
        <h2>Contact Info</h2>
        <p>Phone Number: {profile.phone}</p>
        <p>Email: {profile.email}</p>
        <h2>Address</h2>
        <p className={styles.capitalize}>City: {profile.address.city}</p>
        <p className={styles.capitalize}>Street: {profile.address.street}</p>
        <p>Zipcode: {profile.address.zipcode}</p>
        <button
          className={styles.sign_out_button}
          onClick={() => {
            onSignOut();
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
