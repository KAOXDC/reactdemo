import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Tarjeta } from './Tarjeta';
import { Saludar } from './Saludar';
import Producto from './Producto';
import { Boton } from './Boton';
import { Posts } from './Posts';
import { Navbar } from './Navbar';
import { Slider } from './Slider';
import { Card } from './Card';
import { Info } from './Info';
import { Footer } from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hola !!!!!</h1>)

function Contador() {

    return (
        <>
            <Navbar />
            <Slider />
            <Info /> 
            <div className="container">
                <Card />
            </div>
            <Footer />
        </>
    )
}

root.render(
    // Fragment <></> = es un componente para agrupar elementos sin introducir elementos extra a nivel de DOM
    <>
        {/* <Posts /> */}
        <Contador />
    </>
)
