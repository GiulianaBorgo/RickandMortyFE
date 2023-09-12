import { useAppDispatch, useAppSelector } from '../../store';
import { setFilterValue } from '../../store/character/slice';
import { GET_CHARACTERS } from '../../store/character/thunk';
import './filtros.css';

const Filtros = () => {
    const dispatch = useAppDispatch();
    const filterValue = useAppSelector((state) => state.characters.filterValue);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilterValue(e.target.value));
        dispatch(() => dispatch(GET_CHARACTERS({ param: 'name', value: e.target.value }))
        )

    };

    return (
        <>
            <div className="actions">
                <button className="danger" onClick={() => dispatch(setFilterValue(''))}>Limpiar filtros</button>
            </div>
            <div className="filtros">
                <label id="nombre">Filtrar por nombre:</label>
                <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={filterValue} onChange={handleFilterChange} />
            </div>
        </>
    )
}

export default Filtros;