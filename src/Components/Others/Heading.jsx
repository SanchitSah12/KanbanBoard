import PropTypes from 'prop-types'
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Heading.scss'
const Heading = ({ name,length, children }) => {
    return (
        <div className='Container'>
            <div className='head'>
                <div className='image'>
                    {children}
                </div>
                <h2>{name}</h2>
                <h4>{length}</h4>
            </div>
            <div className='icons'>
                <span><AddIcon /></span>
                <MoreHorizIcon />
            </div>
        </div>
    )
}

Heading.propTypes = {
    name: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    children: PropTypes.any.isRequired,
};

export default Heading