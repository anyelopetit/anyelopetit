import React, { useState } from 'react';

const Form = () => {

  const [data, setData]= useState({
    name: '',
    lastname: ''
  });

  const handleInputChange = (event) => {
    console.log('it works')
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {

  }

  return (
    <>
      <h1>Formulario</h1>
      <form className="row">
        <div className="col-md-3">
          <input
            placeholder="Ingrese Nombre"
            className="form-control"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese Apellido"
            className="form-control"
            name="lastname"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit" onSubmit={handleSubmit}>Enviar</button>
        </div>
      </form>
      <h3>{data.name} - {data.lastname}</h3>
    </>
  );
}
 
export default Form;