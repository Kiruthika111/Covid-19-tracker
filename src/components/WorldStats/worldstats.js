import React from 'react';

import './worldstats.css'

const WorldStats = props => {
    return (
        <div className="worldStats-box">
            <p className="about">{props.about}</p>
            <h1 className="totalNumbers">{props.total}</h1>
            
            
        </div>
    )
}

export default WorldStats