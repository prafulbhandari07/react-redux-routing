import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <header>
      <div id="nav">
        <div id="navLogo">
          <img
            src="https://blog.hubspot.com/hs-fs/hubfs/Starbucks_Corporation_Logo_2011.svg.png?width=400&height=405&name=Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          />
        </div>
        <div id="navItems">
          <ul>
            <li>
              <a href="/"> Home</a>
            </li>
            <li>
              <a href="/billing"> Billing</a>
            </li>
            <li>
              <a href="/dashboard"> Dashboard</a>
            </li>
          </ul>
        </div>
        <div id="navButtons">
          <button onClick={handleClick}>Sign-In</button>
        </div>
      </div>
    </header>
  );
}
