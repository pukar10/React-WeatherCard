import React from 'react';

const Icon = (props) => {
    
    const iconStyle = {
        width: '40%'
    };

    return ( 
        <img 
        className="icon"
        style={iconStyle} 
        src="./img/cloud.png" 
        alt="Error"
        />
     );
}
 
export default Icon;