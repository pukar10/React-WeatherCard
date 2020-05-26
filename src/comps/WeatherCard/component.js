import React from 'react';
import Location from './location.js';
import Icon from './icon.js';

const WeatherCard = (props) => {

    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let low = ''
    if(props.temp >= 60){
        c1 = 255;
        c2 = props.temp;
        c3 = 0;
        low = 'orange'
    }else{
        c1 = 0;
        c2 = (255 - (150 - props.temp));
        c3 = 255;
        low = 'white'
    }

    const cardStyle = {
        margin: '0 auto',
        background: `linear-gradient(
            to bottom, 
            rgb(${c1}, ${c2}, ${c3}), 
            ${low}
            )`,
        color: 'black',
        width: '200px',
        height: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '15px'
    };
    const tempStyle = {
        fontGamily: 'Fira Sans',
        fontSize: '2rem',
        fontWeight: '200'
    };
    const conditionStyle = {
        fontFamily: 'Merriweather',
        fontSize: '1.2rem'
    };

    return (  
        <div className='card' style={cardStyle}>
            <Location />
            <Icon/>
            <h1 className= 'temp' style={tempStyle}>70 F</h1>
            <h3 className= 'condition' style={conditionStyle}>Cloudy</h3>
        </div>
    );

}
export default WeatherCard;