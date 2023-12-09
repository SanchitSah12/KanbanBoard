import Heading from '../Others/Heading'
import Column from '../Others/Column'
import PropTypes from 'prop-types'
import { names } from '../../assets/data.jsx'
const PriorityPage = ({data}) => {
  return (
    <div className='columns'>
        {Object.keys(data).map((key, index) => {
          return(
            <div key={index} className='cards'>
              <Heading name={names[key].name} length={data[key].length}>
                {names[key].icon}
            </Heading>
            <Column data={data[key]} type="priority"/>
            {/* {key} */}
          </div>)
        })}
    </div>
  )
}

export default PriorityPage


PriorityPage.propTypes = {
  data: PropTypes.object.isRequired
};