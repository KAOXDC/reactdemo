// props es el objeto que tiene las propiedades que le pasamos desde el llamado al componente

// function Producto(props){
//     console.log(props);
//     return <h1>Componente Producto {props.nombre}</h1>
// }
function Producto({nombre, precio, disponible, categorias, marca}){
    // console.log(nombre);
    return (
        <div>
            <h1>Componente Producto {nombre}</h1>
            <p> precio : {precio}</p>
            <p> disponible : {disponible?'si':'no'}</p>
            <p> categorias : {categorias}</p>
            <p> marca : {marca.nombre}</p>

        </div>    
    );
}

export default Producto;