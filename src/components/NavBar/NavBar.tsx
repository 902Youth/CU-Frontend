import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store";
import NavItems from "./NavItems";
import Logo from "./Logo";

import "./NavBar.css";

export default function NavBar(): JSX.Element {
  const isLoggedIn: boolean = useSelector(
    (state: AppState) => state.user.isLoggedIn
  );

  return (
    <div className="container-nav-bar">
      <Logo />
      {isLoggedIn && <NavItems />}
    </div>
  );
}
