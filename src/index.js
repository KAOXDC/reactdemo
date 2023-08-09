import React from "react";
import ReactDOM from "react-dom/client";

import { Tarjeta } from './Tarjeta';
import { Saludar } from './Saludar';
import Producto from './Producto';
import { Boton } from './Boton';

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hola !!!!!</h1>)

const handleChange = (e) => {
    // console.log('escribiendo en el input')
    console.log(e.target.value)
    }

root.render(
    // Fragment <></> = es un componente para agrupar elementos sin introducir elementos extra a nivel de DOM
    <>
        <Boton texto='Enviar' />
        <Tarjeta estado={true} />

        <input onClick={function () {
            alert('Selecciono el input text')
            }
        } />
        <input onChange={function (e) {
            // console.log('escribiendo en el input')
            console.log(e)
            }
        } />
        <input onChange={handleChange} />
        <form onSubmit={() => console.log('enviando datos desde el formulario')}>
            <h1>Agregar Producto</h1>
            <input type="submit" value='sent'></input>
            <button>Enviar</button>
        </form>
    </>
)
