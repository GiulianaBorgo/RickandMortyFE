import { useAppDispatch, useAppSelector } from '../../store';
import { Character } from '../../store/character/slice';
import { ADD_FAV, DELETE_FAV } from '../../store/fav/slice';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
export interface TarjetaPersonajeProps  {
    character: Character;
    customkey?: number;
};
const TarjetaPersonaje = ({ character, customkey }: TarjetaPersonajeProps) => {

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