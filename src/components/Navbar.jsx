import { useState } from "react";
import brandLogo from "/BrandLogo.svg";
import searchIcon from "/SearchIcon.svg"
import style from "./navbar.module.css"
import ButtonUI from "./ButtonUI";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// import AutoCompleteUI from "./AutoCompleteUI";
const Navbar = ({handleClickOpen}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  return (
    <div className={style.navbarWrapper}>
      <div className={style.logoSection} onClick={() => navigate("/")}>
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
      {/* <AutoCompleteUI/> */}
      <div className={style.feedbackSection}>
        <ButtonUI
          className={style.feedbackBtn}
          buttonName={"give feedback"}
          handleClickOpen={handleClickOpen}
        />
      </div>
    </div>
  );
};
Navbar.propTypes = {
    handleClickOpen: PropTypes.func.isRequired,
};
export default Navbar;
