import React, { useContext, useState } from "react";
import { Shop } from '../../context/ShopProvider';
import "./styles.css"



function FormCompra() {

  const {traerDataComprador} = useContext(Shop);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerification, setEmailVerification] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({}); 

  

  const handleSubmit = (event) => {
    event.preventDefault();

     const datosIngresados = [firstName,lastName,email,phoneNumber]   
     traerDataComprador(datosIngresados)
     

    setErrors({});

    if (!firstName) {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "Required" }));
    } else if (firstName.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "El nombre debe contener al menos 3 caracteres",
      }));
    }

    if (!lastName) {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "Required" }));
    } else if (lastName.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "El apellido debe contener al menos 3 caracteres",
      }));
    }

    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Required" }));
    }

    if (!emailVerification) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailVerification: "Required",
      }));
    }

    if (email !== emailVerification) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailVerification: "Los emails no coinciden",
      }));
    }

    if (!phoneNumber) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Required",
      }));
    } else if (isNaN(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Ingresar solo números",
      }));
    }  

  };

  return (
    <form onSubmit={handleSubmit} value= {{firstName}}>
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
      <button type="submit" className="btn btn-primary">Verificar Datos</button>
    </form>
  );
}

export default FormCompra;
