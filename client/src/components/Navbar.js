import { useState } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo-black";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser, toggleSidebar } = useAppContext();

  return (
    <Wrapper className="top-nav">
      <div className="nav-center">
        {/*<button className="toggle-btn" onClick={toggleSidebar}>*/}
        {/*  <FaAlignLeft />*/}
        {/*</button>*/}
        <header className="landing-header container">
          <div className="logo-container">
            <Logo />
          </div>
         <NavLinks/>
        </header>
        {/*<div>*/}
        {/*  <Logo />*/}
        {/*  <h3 className="logo-text">dashboard</h3>*/}
        {/*</div>*/}

        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {/* {user && user.name} */}
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button onClick={logoutUser} className="dropdown-btn">
              logout
            </button>
            <button className="dropdown-btn">
              <a href="/stats">stats</a>

            </button>
            <button className="dropdown-btn">
              <a href="/profile">profile</a>

            </button>

          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
