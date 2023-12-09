/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import "./index.scss"
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReportSharpIcon from '@mui/icons-material/ReportSharp';
import {names,user} from '../../assets/data.jsx'
import { Circle } from '@mui/icons-material';


const Card = ({ticket , type}) => {
  const Icon = names[ticket.priority].icon;
  const title = ticket.title.length > 65 ? ticket.title.substring(0, 65) + "..." : ticket.title;
  return (
    <div className='card'>
      <div className='first-row'>
        <p>{ticket.id}</p>
        {type!='user' && <img src={`/${ticket.userId}.jpg`} alt="" />}
      </div>
      <div className='title'>
        <div className='status-icon'>
          {type!="status" && user[ticket.status].icon}
        </div>
        <h4>{title}</h4>
      </div>
      
      <div className="card-bottom">
        {/* {icon} */}
        <div className='shadows'>
          {type!="priority" && Icon}
        </div>
        <div className='feature-req'>
          <Circle style={{
            color:'#6a6a6a'
          }} fontSize='12px'/>
          <p>{ticket.tag[0]}</p>
        </div>
      </div>

    </div>
  )
}

export default Card

Card.propTypes = {
  ticket: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
}
// const data: {
//     tickets: {
//         id: string;
//         title: string;
//         tag: string[];
//         userId: string;
//         status: string;
//         priority: number;
//     }[];
//     users: {
//         id: string;
//         name: string;
//         available: boolean;
//     }[];
// }