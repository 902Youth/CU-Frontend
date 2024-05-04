import { useState } from "react";
import NavItem from "./NavItem";
import { House, Bell, ThumbsUp, Briefcase } from "@phosphor-icons/react";

import "./NavItems.css";

export default function NavItems(): JSX.Element {
  // Temporary state variable to keep track of the current page. Ideally, this should be maintained in global context or state (redux).
  const [currentPage, setCurrentPage] = useState("home");

  type NavItem = {
    name: string;
    icon: JSX.Element;
  };

  const navItems: NavItem[] = [
    {
      name: "home",
      icon: <House size={28} />,
    },
    {
      name: "notifications",
      icon: <Bell size={28} />,
    },
    {
      name: "likes",
      icon: <ThumbsUp size={28} />,
    },
    {
      name: "jobs",
      icon: <Briefcase size={28} />,
    },
  ];

  const navItemsArray = navItems.map((navItem) => {
    return (
      <NavItem active={currentPage === navItem.name} icon={navItem.icon} />
    );
  });

  return <ul className="container-nav-items">{navItemsArray}</ul>;
}
