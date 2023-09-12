import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { Character } from "../store/character/slice";
import { DELETE_ALL_FAVS } from "../store/fav/slice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch()
    const { favs } = useAppSelector((state) => state.fav);

    function handleDeletefavs() {
        dispatch(DELETE_ALL_FAVS())
    }
  
    return (<div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={handleDeletefavs}>Eliminar todos</button>
        </div>
        <div className="grilla-personajes">
            {favs.map((character: Character) => (
                <TarjetaPersonaje character={character} key={character.id} />
            ))}
        </div>
    </div>)
}

export default PaginaFavoritos