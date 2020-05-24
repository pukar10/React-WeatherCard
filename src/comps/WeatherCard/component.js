import React from 'react';
import './component.css';

const WeatherCard = (props) => {
    const cardStyle = {
        margin: '0 auto',
        background: 'linear-gradient(to Bottom, red, pink)',
        color: 'black',
        width: '200px',
        height: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '15px'
    };
    const locationStyle = {
        textAlign: 'center'
    };
    const cityStyle = {
        fontFamily: 'Merriweather',
        fontSize: '1.6rem'
    };
    const stateStyle = {
        fontFamily: 'Fira Sans',
        fontSize: '1.6rem'
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
    const iconStyle = {
        width: '40%'
    };

    return (  
        <div className='card' style={cardStyle}>
            <div className="location" style={locationStyle}>
                <h1 className='city' style={cityStyle}>Fairfax</h1>
                <h3 className='state' style={stateStyle}>VA</h3>
            </div>
            <img className= 'icon' style={iconStyle} src="img/cloud.png" alt="Error"/>
            <h1 className= 'temp' style={tempStyle}>70 F</h1>
            <h3 className= 'condition' style={conditionStyle}>Cloudy</h3>
        </div>
    );

}
export default WeatherCard;