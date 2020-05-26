import React from 'react';

const Icon = ({ condition }) => {
    
    const iconStyle = {
        width: '40%'
    };

    let icon = ""
    switch (condition) {
        case "Cloudy":
            icon = "./img/cloud.png";
            break;
        case "Windy":
            icon = "./img/cloudwind.png";
            break;
        case "Sunny":
            icon = "./img/sunny.png";
            break;
        case "Thunder":
            icon = "./img/thunder.png";
            break;
        default:
            break;
    }

    return ( 
        <img 
        style={iconStyle} 
        src={icon}
        alt="Error"
        />
     );
}
 
export default Icon;