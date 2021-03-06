import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";
import { getUserFromCurrentAuthUser, updateUserStatus } from "./backend";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

//img
import exitIcon from "../components/Utility/img/exit.svg";
import logo from "../components/Utility/img/logo-wh.png";

function Header() {
  const signOut = async () => {
    const user = await getUserFromCurrentAuthUser();
    updateUserStatus(user.id, "OFFLINE");
    auth().signOut();
  };

  return (
    <header>
      <nav>
        <div>
          {auth().currentUser ? (
            <div className="header-container">
              <nav>
                <BurgerMenu />
                <img src={logo} alt="home" className="logo-img" />
                <img src={exitIcon} alt="exit" onClick={() => signOut()} />{" "}
              </nav>
            </div>
          ) : (
            <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/login">
                Sign In{" "}
              </Link>{" "}
              <Link className="nav-item nav-link mr-3" to="/signup">
                Sign Up{" "}
              </Link>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </nav>{" "}
    </header>
  );
}

export default Header;
