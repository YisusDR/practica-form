import React from "react";

const Input = ({
  estado,
  cambiarEstado,
  label,
  placeholder,
  tipo,
  ref_nombre,
  leyendaError,
  expresionRegular,
}) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
  };

  return (
    <div className="col-md-6">
      <label htmlFor={ref_nombre} className="form-label">
        {label}
      </label>
      <input
        type={tipo}
        className={`form-control ${
          estado.valido === "false" ? "is-invalid" : ""
        }`}
        id={ref_nombre}
        placeholder={placeholder}
        value={estado.campo}
        onChange={onChange}
        onKeyUp={validacion}
        onBlur={validacion}
      />
      <div className="invalid-feedback">{leyendaError}</div>
    </div>
  );
};

export default Input;
