import Heading from '../Others/Heading'
import Column from '../Others/Column'
import PropTypes from 'prop-types'
import { names } from '../../assets/data.jsx'
const PriorityPage = ({data}) => {
  const keyType = ["0","4","3","2","1"]
  return (
    <div className='columns'>
        {keyType.map((key, index) => {
          return(
            <div key={index} className='cards'>
              <Heading name={names[key].name} length={data[key]!=undefined ? data[key].length:0}>
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