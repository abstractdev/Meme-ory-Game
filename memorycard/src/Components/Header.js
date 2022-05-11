import React from "react";
import "../Styles/Header.css";
import github from "../GitHub-Mark-32px.png";

function Header() {
  return (
    <>
      <div className="header">Meme-ory Game</div>
      <a
        className="github-link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/abstractdev"
      >
        <img className="github-logo" src={github} alt="github link" />
        abstractdev
      </a>
    </>
  );
}

export default Header;
