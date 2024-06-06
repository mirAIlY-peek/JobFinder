// src/pages/Landing.js
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import NavLinks from "../components/NavLinks";
import {FaCaretDown, FaUserCircle} from "react-icons/fa";

const Landing = () => {
  return (
      <Wrapper>
        <header className="landing-header container">
          <div className="logo-container">
            <Logo />
          </div>
          <nav className="nav-links">

                  <NavLinks/>
              <div className="btn-container">
                  <a href="/register">
                      <button className="btn">

                          {/*<FaUserCircle />*/}
                          LOGIN
                      </button>
                  </a>

              </div>

          </nav>

        </header>
        <div className="container page">
          <div className="info">
            <h1>
              Take ownership, chase ideas and build the future of connectivity.
            </h1>
            <Link to="/register" className="btn-hero">
              <span class="icon">→</span> See jobs
            </Link>


          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
  );
};

export default Landing;
