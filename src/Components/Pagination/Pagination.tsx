// images
import { PAGE_CHANGE } from '../../Shared/Types/PageChange';
import './Pagination.scss';

const Pagination = ({
    handleChange,
}: {
    handleChange: (pagination: PAGE_CHANGE) => void;
}) => {
    return (
        <div className='pagination'>
            <button
                className='pagination__btn'
                onClick={() => handleChange(PAGE_CHANGE.BACK)}
                aria-label='Go to previous page'
            >
                <svg
                    width='15'
                    height='22'
                    viewBox='0 0 15 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M-1.31174e-07 11L11.25 20.5263L11.25 1.47372L-1.31174e-07 11Z'
                        fill='black'
                    />
                </svg>
            </button>
            <button
                className='pagination__btn'
                onClick={() => handleChange(PAGE_CHANGE.FORWARD)}
                aria-label='Go to next page'
            >
                <svg
                    width='15'
                    height='22'
                    viewBox='0 0 15 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M15 11L3.75 20.5263L3.75 1.47372L15 11Z'
                        fill='black'
                    />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
