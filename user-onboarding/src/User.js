import React from 'react';


export default function User ({ details }) {
    if (!details) {
        return <h3>Please Wait...</h3>
    }

    return (
        <div>
            <h2>{details.first_name} {details.last_name}</h2>
            <p>Email: {details.email}</p>
            <p>Role:{details.role} </p>
        </div>
    )
}