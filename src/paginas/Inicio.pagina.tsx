import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { GET_CHARACTERS } from "../store/character/thunk";


/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const { filterValue, characters } = useAppSelector((state) => state.characters)
    const { currentPage} = useAppSelector((state) => state.pagination)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(GET_CHARACTERS({  param: 'page',value: currentPage }))
    }, [currentPage]);

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(filterValue.toLowerCase()))

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
        </div>
            <Filtros />
            <Paginacion page={currentPage} />
            <GrillaPersonajes filteredCharacters={filteredCharacters} />
            <Paginacion page={currentPage} />
    </div>
}

export default PaginaInicio