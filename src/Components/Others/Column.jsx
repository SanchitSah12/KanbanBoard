// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
const Column = ({data,type}) => {
        // console.log(data);
    return (
        <div>
            {data != undefined && data.map((ticket,id)=>{
                return <div key={id}>
                    <Card type={type} ticket={ticket}/>
                </div>
            })}
        </div>
    )
}

Column.propTypes = {
    data: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired
};

export default Column

