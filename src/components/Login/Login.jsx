import { Link } from "react-router-dom";
import "./Login.css";
import SignForm from "../SignForm/SignForm";

export default function Login({ handleLogin }) {
  return (
    <div className="login">
      <SignForm name="login" title="Entrar" onSubmit={handleLogin} />
      <Link className="login__signup-link" to="/signup">
        Ainda não é membro? Inscreva-se aqui!
      </Link>
    </div>
  );
}
