import React from 'react';

const Condition = ({ condition }) => {

    const conditionStyle = {
        fontFamily: 'Merriweather',
        fontSize: '1.2rem'
    };

    return (
        
        <h3 style={conditionStyle}>
            {condition}
        </h3>
     );
}
 
export default Condition;