import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = ({ grouping, setGrouping, sorting, setSorting }) => {
    const [showOptions, setShowOptions] = useState(false);
    const handleOptions = () => {
        setShowOptions(prev => !prev);
    };

    const handleGroupingChange = (event) => {
        setGrouping(event.target.value);
    };
    const handleSortingChange = (event) => {
        setSorting(event.target.value);
    };


    const optionsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const groupingRef = useRef(null);
    const sortingRef = useRef(null);
    return (
        <>
            <nav className='navbar'>
                <button className='button' onClick={handleOptions}>
                    <TuneIcon fontSize='small' />
                    <p>Display</p>
                    <KeyboardArrowDownIcon fontSize='small' />
                </button>
            </nav>
            {showOptions &&
                <div ref={optionsRef} className='options'>
                    <div className='option'>
                        <label htmlFor="select" >Grouping:</label>
                        <div className='select-div'>
                            <select ref={groupingRef} id="select" className='group' value={grouping} onChange={handleGroupingChange}>
                                <option value="Status">Status</option>
                                <option value="User">User</option>
                                <option value="Priority">Priority</option>
                            </select>
                            <div onClick={() => groupingRef.current.click()}>
                                <KeyboardArrowDownIcon fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='option'>
                        <label htmlFor="select">Ordering:</label>
                        <div className='select-div'>
                            <select ref={sortingRef} className='group' value={sorting} onChange={handleSortingChange}>
                                <option value="title">Title</option>
                                <option value="priority">Priority</option>
                            </select>
                            <div onClick={() => sortingRef.current.click()}>
                                <KeyboardArrowDownIcon fontSize='small' />
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    );
};


Navbar.propTypes = {
    grouping: PropTypes.string,
    setGrouping: PropTypes.func,
    sorting: PropTypes.string,
    setSorting: PropTypes.func,
};
export default Navbar;