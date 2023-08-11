import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Tarjeta } from './Tarjeta';
import { Saludar } from './Saludar';
import Producto from './Producto';
import { Boton } from './Boton';
import { Posts } from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hola !!!!!</h1>)

function Contador() {
    // let contador = 0

    const [contador, setContador] = useState(0)
    const [mensaje, setMensaje] = useState('')

    return (
        <div>
            <h1>Contador = {contador} </h1>
            <button onClick={() => {
                setContador(contador + 1)
            }}>Incrementar +1 </button>

            <button onClick={() => {
                setContador(contador - 1)
            }}>Decrementar -1 </button>
            <hr></hr>
            <input onChange={e => setMensaje( e.target.value )} />
            <button onClick={ () => {
                alert(mensaje)
            } } > Guardar </button>
        </div>


    )
}

root.render(
    // Fragment <></> = es un componente para agrupar elementos sin introducir elementos extra a nivel de DOM
    <>
        {/* <Posts /> */}
        <Contador />
    </>
)
