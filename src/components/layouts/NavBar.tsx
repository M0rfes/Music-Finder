import React from "react";
import { RouteComponentProps } from "react-router-dom";
interface NavProp {
  title: string;
  name?: string;
}

const NavBar: React.FC<NavProp> = props => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand h3 mb-0 mx-auto">{props.title}</span>
    </nav>
  );
};

export default NavBar;
