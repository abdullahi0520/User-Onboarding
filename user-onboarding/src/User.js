import React from 'react';


export default function User ({ details }) {
    if (!details) {
        return <h3>Please Wait...</h3>
    }

    return (
        <div className='posted-user'>
            {/* <h2>{details.first_name}</h2>
            <h3>{details.last_name}</h3>
            <p>{details.email}</p> */}
            
                {JSON.stringify(details.first_name,null, 2)}
                {JSON.stringify(details.last_name,null, 2)}
                {JSON.stringify(details.email,null, 2)}
            

        </div>
    )
}