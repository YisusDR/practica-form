import { useState } from "react";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="row mb-3">
          <Input
            estado={usuario}
            cambiarEstado={cambiarUsuario}
            label="Usuario"
            placeholder="jesus123"
            tipo="text"
            name="usuario"
            leyendaError="El usuario ta feo"
            expresionRegular={expresiones.usuario}
          />
          <Input
            estado={nombre}
            cambiarEstado={cambiarNombre}
            label="Nombre"
            placeholder="John Doe"
            tipo="text"
            name="nombre"
            leyendaError="El nombre no es válido"
            expresionRegular={expresiones.nombre}
          />
        </div>
        <div className="row mb-3">
          <Input
            estado={password}
            cambiarEstado={cambiarPassword}
            label="Contraseña"
            placeholder="contrasena"
            tipo="password"
            name="password"
            leyendaError="La contraseña debe tener entre 4 y 12 caracteres."
            expresionRegular={expresiones.password}
          />
          <Input
            estado={password2}
            cambiarEstado={cambiarPassword2}
            label="Repetir Contraseña"
            placeholder="contrasena"
            tipo="password"
            name="password2"
            leyendaError="Las contraseñas no coinciden"
            expresionRegular={expresiones.password}
          />
        </div>
        <div className="row mb-3">
          <Input
            estado={correo}
            cambiarEstado={cambiarCorreo}
            label="Correo"
            placeholder="tucorreo@correo.com"
            tipo="email"
            name="correo"
            leyendaError="El correo no es válido"
            expresionRegular={expresiones.correo}
          />
          <Input
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            label="Teléfono"
            placeholder="4491234567"
            tipo="text"
            name="telefono"
            leyendaError="El teléfono no es válido"
            expresionRegular={expresiones.telefono}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="terminos" />
          <label className="form-check-label" htmlFor="terminos">
            Acepto los términos y condiciones
          </label>
        </div>
        <button type="submit" className="btn btn-dark">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
