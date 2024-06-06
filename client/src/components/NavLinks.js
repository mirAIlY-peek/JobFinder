import links from "../utils/links";
import {Navigate, NavLink} from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import {useAppContext} from "../context/appContext";

const NavLinks = ({ toggleSidebar }) => {
  const { user } = useAppContext();

  return (
    <div className="nav-links">

      {links.map((link) => {
        let { text, path, id, icon } = link;
        if (!user) {
          path="register"
        }

        return (

              <NavLink
                to={path}
                key={id}
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {text}
              </NavLink>

        );
      })}
    </div>
  );
};

export default NavLinks;
