import logo from "../../images/logo.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  let headerLink;

  console.log("isLoggedIn", isLoggedIn);

  if (isLoggedIn) {
    headerLink = (
      <ul className="header__nav">
        <li className="header__email">{currentUser.email}</li>
        <li className="header__link header__link_signout">Sair</li>
      </ul>
    );
  }

  if (location.pathname === "/signup") {
    headerLink = (
      <Link className="header__link" to="/signin">
        Faça o login
      </Link>
    );
  }

  if (location.pathname === "/signin") {
    headerLink = (
      <Link className="header__link" to="/signin">
        Entrar
      </Link>
    );
  }

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <img
            className="header__logo"
            src={logo}
            alt="Logo com a escrita Around the US"
          />
          {headerLink}
        </div>
        <hr className="header__line" />
      </header>
    </>
  );
}

export default Header;
