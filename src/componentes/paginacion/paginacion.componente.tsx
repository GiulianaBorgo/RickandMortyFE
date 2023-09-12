import { useAppDispatch, useAppSelector } from '../../store';
import { setCurrentPage } from '../../store/pagination/slice';
import './paginacion.css';


/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * @component
 * @param {number} - Número de página actual.
 * @returns {JSX.Element} - Elemento JSX que muestra los botones de paginación anterior y siguiente.
 */

interface PaginacionProps {
    page: number
}
const Paginacion: React.FC<PaginacionProps> = ({ page }) => {
    const dispatch = useAppDispatch();
    const { totalPages } = useAppSelector((state) => state.pagination)
    const handlePreviousClick = () => {
        if (page > 1) {
            dispatch(setCurrentPage(page - 1));
        }
    }

    const handleNextClick = () => {
        if (page < totalPages) {
            dispatch(setCurrentPage(page + 1))
        }
    }

    return <div className="paginacion">
        <button disabled={page === 1} className={"primary"} onClick={handlePreviousClick}>Anterior</button>
        <button disabled={page === totalPages} className={"primary"} onClick={handleNextClick}>Siguiente</button>
    </div>
}

export default Paginacion;