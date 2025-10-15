import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#home">HuHz Team</a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#us">About us</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
