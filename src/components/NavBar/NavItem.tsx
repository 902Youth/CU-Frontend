import { Link } from "react-router-dom";
import "./NavItem.css";

export default function NavItem({ path, icon, active }) {
  const activeClass = active ? "active" : "";

  return (
    <li className="nav-item">
      <Link className={`nav-item-link ${activeClass}`} to={path}>
        {icon}
      </Link>
    </li>
  );
}
