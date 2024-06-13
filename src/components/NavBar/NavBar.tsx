import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store";

import NavItems from "./NavItems";
import Logo from "./Logo";

import "./NavBar.css";

const NavBar: React.FC<{className: string}> = () => {
  const isLoggedIn: boolean = useSelector(
    (state: AppState) => state.user.isLoggedIn
  );

  return (
    <div className="container-nav-bar">
      <Logo />
      {/* temporarily set to true so navbar items can be viewed and clicked on. */}
      {(isLoggedIn || true) && <NavItems />}
    </div>
  );
}

export default NavBar
