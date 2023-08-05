import React from "react";
import ReactDOM from "react-dom/client";

import { Saludar } from './Saludar';
import Producto from './Producto';

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hola !!!!!</h1>)


root.render(
    // Fragment <></> = es un componente para agrupar elementos sin introducir elementos extra a nivel de DOM
    <>
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
