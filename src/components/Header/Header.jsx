import "./Header.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="BrainFlix logo" className="header__logo" />
      </Link>

      <div className="header__container">
        <input
          type="text"
          placeholder="Search"
          className="header__container__input"
        ></input>
        <img
          src={profilePic}
          alt="Profile Avatar"
          className="header__container__picture--mobile"
        />
      </div>
      <Link to="/upload">
        <button className="header__button">UPLOAD</button>
      </Link>
      <img src={profilePic} alt="avatar" className="header__avatar" />
    </header>
  );
}

export default Header;
