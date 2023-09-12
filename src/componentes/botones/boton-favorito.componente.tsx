import './boton-favorito.css';

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * @component
 * @param {boolean} props.esFavorito - Indica si el elemento es favorito (true) o no (false).
 * @param {Function} [props.onClick] - Función opcional que se ejecuta cuando se hace clic en el botón.
 * @returns {JSX.Element} - Elemento JSX que representa el botón de favorito.
 */

export interface BotonProps {
    esFavorito: boolean,
    onClick?: () => void
}
const BotonFavorito = ({ esFavorito , onClick} : BotonProps) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return (
    <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
    )
}

export default BotonFavorito;