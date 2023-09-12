import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppSelector } from '../../store';
import { Character } from '../../store/character/slice';

/**
 * Componente de grilla de personajes para la página de inicio.
 *
 * Este componente muestra una grilla de personajes y puede manejar la paginación y la visualización de personajes filtrados.
 *
 * @component
 * @param {Character[]} props.filteredCharacters - Un array de personajes filtrados que se mostrarán en la grilla.
 * @returns {JSX.Element} - Elemento JSX que representa la grilla de personajes.
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