import React from 'react';

const tempStyle = {
    fontGamily: 'Fira Sans',
    fontSize: '2rem',
    fontWeight: '200'
};

const Temp = ({ temp }) => {
    return ( 
        <h1 style={tempStyle}>
            {temp}
        </h1>
     );
}
 
export default Temp;