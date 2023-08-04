import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hola !!!!!</h1>)
function Saludar() {

    const estado = true
    const persona = {
        nombre: 'Diego',
        apellido: 'Prado',
    }
    if (estado) {
        return <h2> {persona.nombre}  Esta Vivo 😄</h2>
    } else {
        return <h2> {persona.nombre} Ya no vive 🥶</h2>
    }
    // alternativa a un IF ELSE anterior 
    return <h2> {estado ? 'Estoy Vivo :D 😄' : 'Ya no vivo :C 🥶'} </h2>

}

root.render(
    // Fragment <></> = es un componente para agrupar elementos sin introducir elementos extra a nivel de DOM
    <>
        <Saludar />
    </>
)
