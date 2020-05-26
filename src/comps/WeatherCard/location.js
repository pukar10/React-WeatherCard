import React from 'react';

const Location = ({ city, country }) => {

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

    return ( 
        <div style={locationStyle}>
            <h1 className='city' style={cityStyle}>
                {city}
            </h1>
            <h3 className='Country' style={stateStyle}>
                {country}
            </h3>
        </div>
     );
}
 
export default Location;