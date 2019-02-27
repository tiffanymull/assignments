import React from 'react'

const Badge = (props) => {
    //destructure
    const {firstName, lastName, email, birth, phone, favFood, about} = props.badge
    return(
        <div>
            <h3>{firstName} {lastName}</h3>
            <h5>E-mail: {email}</h5>
            <h5>Birthplace: {birth}</h5>
            <h5>Phone #: {phone}</h5>
            <h5>Favorite Food: {favFood}</h5>
            <h5>About: {about}</h5>
        </div>
    )
}

export default Badge;