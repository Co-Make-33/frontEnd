import React from 'react';

const Issue = ({ name, description }) => {
 

    return (
        <div>
        <h3>{name}</h3>
        <p>{description}</p>
        </div>
    );
}

export default Issue