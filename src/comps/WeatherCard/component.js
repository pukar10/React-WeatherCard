import React from 'react';
import Location from './location.js';
import Icon from './icon.js';
import Condition from './condition.js';
import Temp from './temp.js';

const WeatherCard = ({ temp, condition, city, country }) => {

    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let low = ''
    if(temp >= 60){
        c1 = 255;
        c2 = temp;
        c3 = 0;
        low = 'orange'
    }else{
        c1 = 0;
        c2 = (255 - (150 - temp));
        c3 = 255;
        low = 'pink'
    }

    const cardStyle = {
        margin: '0 auto',
        background: `linear-gradient(
            to bottom, 
            rgb(${c1}, ${c2}, ${c3}), 
            ${low}
            )`,
        color: 'white',
        width: '200px',
        height: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '15px',
        float: 'left'
    };

    return (  
        <div className='card' style={cardStyle}>
            <Location city={city} country={country} />
            <Icon condition={condition} />
            <Temp temp={temp} />
            <Condition condition={condition} />
        </div>
    );

}
export default WeatherCard;