import NavItems from "./NavItems";
import Logo from "./Logo";

import "./NavBar.css";

export default function NavBar(): JSX.Element {
  return(
  <div className="container-nav-bar">
    <Logo />
    <NavItems />
  </div>
  );
}
