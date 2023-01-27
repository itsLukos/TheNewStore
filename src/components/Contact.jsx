import React, { useState } from "react";

function Contact () {

    const [message, setMessage] = useState({
        fullName: "",
        email: "",
        msg: "",

    });

    const [formValido , setFormValido]= useState(false);

    const handleChange = (ev) => {
        let value=ev.target.value;
        
        if(ev.target.id == "email" ){
            setFormValido(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))
        }else if(ev.target.id=="fullName"){
            setFormValido(value.length > 2 && value.length < 50)
        }else if(ev.target.id=="msg"){
            setFormValido(value.length > 30 && value.length < 200)
        }
    };

    const handleClick = (ev) => {
        setMessage ( { ...message, [ev.target.id]: ev.target.value })
        if (formValido){
            alert("El mensaje se ha enviado correctamente");
        }else{
            alert("Datos incorrectos \n Asegurate de haber escrito tu nombre, de que tu correo es correcto y de que tu mensaje es mayor de 30 caracteres");
        }
            
       
    };

    

  
    return (
        <>
            <form className="form" onSubmit={(ev) => ev.preventDefault()}>
                <div>
                    <label htmlFor="fullName">Nombre completo</label>
                    <input type="text" id="fullName" placeholder="Nombre y apellidos" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Correo electróncio</label>
                    <input type="email" id="email"  placeholder="correo@correo.com" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="msg">Mensaje</label>
                    <input type="text" id="msg" placeholder="Escriba su mensaje" onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit" onClick={handleClick}>Enviar</button>
                    
                    
                </div>
            </form>
        </>

    );
}

export default Contact;