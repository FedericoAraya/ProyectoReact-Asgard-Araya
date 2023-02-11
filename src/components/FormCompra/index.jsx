import React, { useContext, useState } from "react";
import { Shop } from "../../context/ShopProvider";
import "./styles.css";

function FormCompra() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerification, setEmailVerification] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState("");

  const { verificarCliente } = useContext(Shop);

  const handleSubmit = (event) => {
    verificarCliente(false);
    event.preventDefault();
    setErrors("");

    if (!firstName) {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "Required" }));
      return;
    } else if (firstName.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "El nombre debe contener al menos 3 caracteres",
      }));
      return;
    }

    if (!lastName) {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "Required" }));
      return;
    } else if (lastName.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "El apellido debe contener al menos 3 caracteres",
      }));
      return;
    }

    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Required" }));
      return;
    }

    if (!emailVerification) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailVerification: "Required",
      }));
      return;
    }

    if (email !== emailVerification) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailVerification: "Los emails no coinciden",
      }));
      return;
    }

    if (!phoneNumber) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Required",
      }));
      return;
    } else if (isNaN(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Ingresar solo números",
      }));
      return;
    }

    if (!errors && firstName && lastName && email && phoneNumber) {
      verificarCliente(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} value={{ firstName }}>
      <label>
        Nombre:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        {errors.firstName && <span>{errors.firstName}</span>}
      </label>
      <br />
      <label>
        Apellido:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        {errors.lastName && <span>{errors.lastName}</span>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <br />
      <label>
        Verificación de email:
        <input
          type="email"
          value={emailVerification}
          onChange={(e) => setEmailVerification(e.target.value)}
        />
        <br />
        {errors.emailVerification && <span>{errors.emailVerification}</span>}
      </label>
      <br />
      <label>
        Teléfono:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </label>
      <br />
      <button type="submit" className="btn btn-primary">
        Verificar Datos
      </button>
    </form>
  );
}

export default FormCompra;
