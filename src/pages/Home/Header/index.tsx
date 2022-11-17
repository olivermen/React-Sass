import React from "react";

// import stylesheets
import "./header.scss";
interface HeaderProps {
  name: string;
}
const Header = ({ name }: HeaderProps) => {
  return (
    <div className="header">
      <div className="title">
        <a href="https://jonny.me">{name}.me</a>
      </div>
      <div className="navbar">
        <a href="https://jonny.me">SERVICES</a>
        <a href="https://jonny.me">PORTFOLIO</a>
        <a href="https://jonny.me">PRICING</a>
      </div>
    </div>
  );
};

export default Header;
