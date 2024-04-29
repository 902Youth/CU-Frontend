import NavItem from "./NavItem";

import { House, Bell, ThumbsUp, Briefcase } from "@phosphor-icons/react";

import "./NavItems.css";

export default function NavItems(): JSX.Element {
  return (
    <ul className="container-nav-items">
      <NavItem icon={<House size={28} />} />
      <NavItem icon={<Bell size={28} />} />
      <NavItem icon={<ThumbsUp size={28} />} />
      <NavItem icon={<Briefcase size={28} />} />
    </ul>
  );
}
