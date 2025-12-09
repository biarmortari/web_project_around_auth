import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/Login.css";

import Header from "../Header/Header";

export default function Login({ handleLogin }) {
  return (
    <>
      <Header />
      <div className="login">
        <h2 className="login_title">Entrar</h2>

        <div className="login__signup">
          <p>Ainda não é membro?</p>
          <Link to="/register" className="signup__link">
            Inscreva-se aqui
          </Link>
        </div>
      </div>
    </>
  );
}
