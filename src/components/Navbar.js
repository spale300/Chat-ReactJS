import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <img src={Logo} alt="#" className="logo-main" />
      <div className="user">
        <img className="user-img" src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button className="logout-btn" onClick={() => signOut(auth)}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
