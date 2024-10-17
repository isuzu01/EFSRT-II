import React, { useState } from "react";
import iconosesion from "../img/icono-sesion.png";
import Button from "./Button";

const IniciarSesion = ({ isOpen, onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!isTermsAccepted) {
      alert("Debes aceptar los términos y condiciones para iniciar sesión.");
      return;
    }
    alert("¡Inicio de sesión exitoso!");
    onClose();
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    alert("¡Registro exitoso!");
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="img-log">
          <img src={iconosesion} alt="icono-sesion.png" />
        </div>
        {isRegistering ? (
          <h2>¡ REGISTRATE AHORA !</h2>
        ) : (
          <h2>INICIAR SESIÓN</h2>
        )}
        <form
          onSubmit={isRegistering ? handleSubmitRegister : handleSubmitLogin}
        >
          <div className="group">
            <label>EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="group">
            <label>CONTRASEÑA</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isRegistering && (
            <div className="group">
              <label>CONFIRMAR CONTRASEÑA</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <div className="group group-terminos">
            <label className="terminos">
              <input
                type="checkbox"
                checked={isTermsAccepted}
                onChange={() => setIsTermsAccepted(!isTermsAccepted)}
                required
              />
              Aceptar términos y condiciones
            </label>
            <div className="terminos-info">
              <p>
                Al hacer clic en{" "}
                {isRegistering ? "Registrarte" : "Iniciar Sesión"}, aceptas las
                Condiciones, Política de privacidad y la Política de cookies. Es
                posible que te enviemos notificaciones por SMS, que podrás
                desactivar cuando quieras.
              </p>
            </div>
          </div>
          <div className="boton">
            <button type="submit">
              {isRegistering ? "Registrarse" : "Iniciar Sesión"}
            </button>
          </div>
        </form>
        {isRegistering ? (
          <p className="tienes-cuenta">
            ¿Ya tienes una cuenta?
            <span
              onClick={() => setIsRegistering(false)}
              style={{ color: "var(--rosa)", cursor: "pointer" }}
            >
              Inicia Sesión aquí
            </span>
          </p>
        ) : (
          <p className="tienes-cuenta">
            ¿No tienes una cuenta?
            <span
              onClick={() => setIsRegistering(true)}
              style={{ color: "var(--rosa)", cursor: "pointer" }}
            >
              Regístrate aquí
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default IniciarSesion;
