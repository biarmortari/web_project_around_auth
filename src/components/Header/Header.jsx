import logo from "../../images/logo.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const location = useLocation();

  const userMenu = (
    <ul className="header__nav">
      <li className="header__email">{currentUser?.email}</li>
      <li className="header__link header__link_signout">Sair</li>
    </ul>
  );

  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          className="header__logo"
          src={logo}
          alt="Logo com a escrita Around the US"
        />

        {isLoggedIn && (
          <>
            <div
              className={`header__nav-burger ${isOpen ? "open" : ""}`}
              onClick={toggleNavBar}
            >
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>

            <nav className={`header__nav-list ${isOpen ? "active" : ""}`}>
              {userMenu}
            </nav>
          </>
        )}

        {!isLoggedIn && location.pathname === "/signup" && (
          <Link className="header__link" to="/signin">
            Faça o login
          </Link>
        )}

        {!isLoggedIn && location.pathname === "/signin" && (
          <Link className="header__link" to="/signup">
            Cadastrar-se
          </Link>
        )}
      </div>

      <hr className="header__line" />
    </header>
  );
}

export default Header;
