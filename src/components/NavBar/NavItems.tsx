import { useState } from "react";
import NavItem from "./NavItem";
import { House, Bell, ThumbsUp, Briefcase } from "@phosphor-icons/react";

import "./NavItems.css";

export default function NavItems(): JSX.Element {
  // Temporary state variable to keep track of the current page. Ideally, this should be maintained in global context or state (redux).
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <ul className="container-nav-items">
      <NavItem active={currentPage === "home"} icon={<House size={28} />} />
      <NavItem
        active={currentPage === "notifications"}
        icon={<Bell size={28} />}
      />
      <NavItem active={currentPage === "likes"} icon={<ThumbsUp size={28} />} />
      <NavItem
        active={currentPage === "messages"}
        icon={<Briefcase size={28} />}
      />
    </ul>
  );
}
