
import Heading from '../Others/Heading'
import Column from '../Others/Column'
import PropTypes from 'prop-types'


const UserPage = ({ data,name }) => {
  // console.log((name))
  const ticketsWithUser = Object.entries(data).map(([userId, tickets]) => {
    const user = name.find(user => user.id === userId);
    tickets.user = user;
    return {
      tickets
    };
  });
  
  // console.log("Data")
  
  ticketsWithUser.sort((a, b) => a.tickets.user.id.localeCompare(b.tickets.user.id));
  console.log(ticketsWithUser)
  return (
    <div className='columns'>

        {ticketsWithUser.map((item, index) => {
          return(
            <div key={index} className='cards'>
              <Heading name={item.tickets.user.name} length={item.tickets.length}>
                <img style={{
                  "width": '30px',
                  "height": '30px',
                  objectFit: 'cover',
                  borderRadius: '100%',
                }} src={`/${item.tickets.user.id}.jpg`} alt="" />
            </Heading>
            <Column data={item.tickets} type = "user"/>
            {/* {key} */}
          </div>)
        })}
    </div>
  )
}

UserPage.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired

};
export default UserPage