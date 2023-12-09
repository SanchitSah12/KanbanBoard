
import PropTypes from 'prop-types';
import Column from '../Others/Column';
import './index.scss'
import Heading from '../Others/Heading';

import { user } from '../../assets/data';
const StatusPage = ({ data }) => {
    // console.log(data);
    return (
        <div className='columns'>
            {Object.keys(user).map((key, index) => {
                return (
                    <div key = {index} className='cards'>
                        <Heading name={user[key].title} length={data[key] ? data[key].length : 0}>
                            {user[key].icon}
                        </Heading>
                        <Column type = "status" data={data[key]} />
                    </div>
                )

            })}
        </div>
    )
}

StatusPage.propTypes = {
    data: PropTypes.object.isRequired
};

export default StatusPage