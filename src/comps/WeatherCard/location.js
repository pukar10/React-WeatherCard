import React from 'react';

const Location = () => {

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
        <div className="location" style={locationStyle}>
            <h1 className='city' style={cityStyle}>Fairfax</h1>
            <h3 className='state' style={stateStyle}>VA</h3>
        </div>
     );
}
 
export default Location;