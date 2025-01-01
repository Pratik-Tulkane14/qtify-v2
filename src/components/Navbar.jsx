import { useState } from "react";
import brandLogo from "/BrandLogo.svg";
import searchIcon from "/SearchIcon.svg"
import style from "./navbar.module.css"
import ButtonUI from "./ButtonUI";
const Navbar = () => {
  const [input, setInput] = useState("");
  return (
    <div className={style.navbarWrapper}>
      <div className={style.logoSection}>
          <img src={brandLogo} alt="brandLogo" />
      </div>
      <div className={style.searchSection}>
        <span className={style.searchWrapper}>
        <input
        className={style.searchBox}
        placeholder="Search a album of your choice"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
        <img className={style.searchImg} src={searchIcon} alt="searchIcon" />
          </span>
      </div>
      <div className={style.feedbackSection}>
        <ButtonUI className={style.feedbackBtn} buttonName={"give feedback"}/>
      </div>
    </div>
  );
};

export default Navbar;
