import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/Login.css";

import Header from "../Header/Header";

export default function Login({ handleLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <>
      <Header />
      <div className="login">
        <h2 className="login_title">Entrar</h2>
        <form className="auth_form" onSubmit={handleSubmit}>
          <input
            id="email"
            required
            name="email"
            type="text"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />

          <input
            id="password"
            required
            name="password"
            type="password"
            placeholder="Senha"
            value={data.password}
            onChange={handleChange}
          />

          <button type="submit" className="auth_form_button">
            Entrar
          </button>
        </form>
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
