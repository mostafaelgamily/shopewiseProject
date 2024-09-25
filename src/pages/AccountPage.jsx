import { useContext } from "react";
import userContext from "../contexts/usersContext";
import NavSpacer from "../components/navSpacer/NavSpacer";
import AccountInfo from "../sections/accountInfo/AccountInfo";
import Login from "../sections/login/Login";

const AccountPage = () => {
  const {
    isLoggedIn,
    userProfile,
    profiles,
    handleLoginSuccess,
    handleSetUserProfile,
    handleSignOut,
    loading,
    error,
  } = useContext(userContext);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <NavSpacer />
      {isLoggedIn ? (
        <AccountInfo profileData={userProfile} onSignOut={handleSignOut} />
      ) : (
        <Login
          profilesData={profiles}
          onLoginSuccess={handleLoginSuccess}
          setTargetProfile={handleSetUserProfile}
        />
      )}
    </div>
  );
};

export default AccountPage;
