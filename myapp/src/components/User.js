import React from 'react';

export default function User({
    firstname, lastname, age
}) {
    return (
    <div>
        <p>Firstname: {firstname}</p>
        <p>Lastname: {lastname}</p>
        <p>Age: {age}</p>
    </div>
    )
}

