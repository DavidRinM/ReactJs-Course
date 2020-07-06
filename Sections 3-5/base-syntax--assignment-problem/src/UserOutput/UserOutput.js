import React from 'react'

import './UserOutput.css'

const userOutput = props => {
    return(
        <div className="UserOutput">
            <p> First Paragraph by {props.userName}</p>
            <p> Second Paragraph</p>
        </div>
    );
}

export default userOutput;