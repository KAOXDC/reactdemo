import './tarjeta.css'

export function Tarjeta({ estado }) {
    return (
        <div className='tarjeta' >
            <h1>Titulo Tarjeta</h1>
            <p>Texto Tarjeta</p>
            <span className = { estado ? 'bg-activo' : 'bg-inactivo'} >
                {estado ? 'Activo' : 'Inactivo'}
            </span>
        </div>
    )
}