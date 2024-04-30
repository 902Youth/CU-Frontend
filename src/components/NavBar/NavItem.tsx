import "./NavItem.css";

export default function NavItem({ icon, active }) {
  const className = `nav-item ${active ? "active" : ""}`;
  return <li className={className}>{icon}</li>;
}
