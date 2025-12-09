import { Link } from "react-router-dom";
import "./styles/Register.css";
import SignForm from "../SignForm/SignForm";

export default function Register({ handleRegistration }) {
  return (
    <div className="register">
      <SignForm
        name="register"
        title="Inscrever-se"
        onSubmit={handleRegistration}
      />
      <Link className="register__signin-link" to="/signin">
        Já é um membro? Faça o login aqui!
      </Link>
    </div>
  );
}
