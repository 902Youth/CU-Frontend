import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { House, Bell, ThumbsUp, Briefcase } from "@phosphor-icons/react";

import "./NavItems.css";

export default function NavItems(): JSX.Element {
  const currentLocation = useLocation();

  type NavItem = {
    name: string;
    path: string;
    icon: JSX.Element;
  };

  const navItems: NavItem[] = [
    {
      name: "Home",
      path: "/home",
      icon: <House size={28} />,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <Bell size={28} />,
    },
    {
      name: "Likes",
      path: "/likes",
      icon: <ThumbsUp size={28} />,
    },
    {
      name: "Jobs",
      path: "/jobs",
      icon: <Briefcase size={28} />,
    },
  ];

  const navItemsArray = navItems.map((navItem: NavItem) => {
    const { path, icon } = navItem;
    const isCurrentLocation = currentLocation.pathname === path;
    return <NavItem path={path} icon={icon} active={isCurrentLocation} />;
  });

  return <ul className="container-nav-items">{navItemsArray}</ul>;
}
