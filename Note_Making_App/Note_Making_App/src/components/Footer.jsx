import React from "react";
const curryear = new Date().getFullYear(); //new keyword is creating new Date everytime.

function Footer() {
  return (
    <footer>
      <p>Copyright @{curryear}</p>
    </footer>
  );
}

export default Footer;
