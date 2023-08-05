// se puede exportar cada cuncion que queramos  anteponiendo la palabra export
export function Saludar() {

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

// Exportar una funcion por defecto
// export default Saludar
