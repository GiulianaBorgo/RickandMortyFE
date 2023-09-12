import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppSelector } from '../../store';
import { Character } from '../../store/character/slice';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const  GrillaPersonajes: React.FC<{ filteredCharacters: Character[] }> = ({ filteredCharacters })=> {
    const { isLoading, isError } = useAppSelector((state) => state.characters)
  
    return <div className="grilla-personajes">
        {isLoading ? <p>Loading...</p> :
            filteredCharacters.map(({ id, name, image }) =>
         
                <TarjetaPersonaje character={{ id, name, image }} key={id} />)
                }
        {isError && <p>{isError}</p>}
    </div>
}

export default GrillaPersonajes;