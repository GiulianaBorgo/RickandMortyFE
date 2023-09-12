import { useAppDispatch, useAppSelector } from '../../store';
import { Character } from '../../store/character/slice';
import { ADD_FAV, DELETE_FAV } from '../../store/fav/slice';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta que muestra la información de un personaje y permite agregarlo o quitarlo de favoritos.
 *
 * @component
 * @param {Object} character - Los datos del personaje a mostrar.
 * @param {string} character.image - La URL de la imagen del personaje.
 * @param {string} character.name - El nombre del personaje.
 * @returns {JSX.Element} - Elemento JSX que representa la tarjeta del personaje.
 */

export interface TarjetaPersonajeProps  {
    character: Character;
};
const TarjetaPersonaje = ({ character }: TarjetaPersonajeProps) => {

    const dispatch = useAppDispatch()
    const {favs} = useAppSelector((state) => state.fav)
    const isFavorite = favs.some((favorite) => favorite.id === character.id);
   
    const handleToggleFavorite = () => {
      if (isFavorite) {
        dispatch(DELETE_FAV(character))
      } else {
        dispatch(ADD_FAV(character))
      }
    };
  
    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito esFavorito={isFavorite} onClick={handleToggleFavorite} />
        </div>
    </div>
}

export default TarjetaPersonaje;