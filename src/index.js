import React from "react";
import ReactDOM from "react-dom/client";

import { Tarjeta } from './Tarjeta';
import { Saludar } from './Saludar';
import Producto from './Producto';
import { Boton } from './Boton';

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hola !!!!!</h1>)


root.render(
    // Fragment <></> = es un componente para agrupar elementos sin introducir elementos extra a nivel de DOM
    <>  
        <Boton texto = 'Enviar' />
        <Tarjeta estado = {true} />


        <Saludar />
        <Producto 
            nombre="Agua" 
            precio={2500} 
            disponible={true}
            categorias={[1,2,3]}
            marca={ {nombre:"marca 1"} } 
        />
        
    </>
)
