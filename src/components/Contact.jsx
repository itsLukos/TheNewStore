import React, { useState } from "react";

function Contact () {

    const [message, setMessage] = useState({
        fullName: "",
        email: "",
        msg: "",

    });

    const handleChange = (ev) => {
        setMessage ( { ...message, [ev.target.id]: ev.target.value })
    };

    const handleClick = (ev) => {
        alert("El mensaje se ha enviado correctamente");
       
    };
  
    return (
        <>
            <form className="form" onSubmit={(ev) => ev.preventDefault()}>
                <div>
                    <label htmlFor="fullName">Nombre completo</label>
                    <input type="text" id="fullName" placeholder="Nombre y apellidos" minLength="5" maxLength="50" pattern="[A-Za-z]" required onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Correo electróncio</label>
                    <input type="email" id="email"  placeholder="correo@correo.com" minLength="5" maxLength="45" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" required onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="msg"></label>
                    <input type="text" id="msg" placeholder="Escriba su mensaje" required onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit" onClick={handleClick}>Enviar</button>
                    
                    
                </div>
            </form>
        </>

    );
}

export default Contact;