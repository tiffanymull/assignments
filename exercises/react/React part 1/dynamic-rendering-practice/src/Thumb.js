import React from 'react'

const Greeting = (props) => {

    if (props.phrae === "Up"){
        return (
            <img src="Terminator_Thumb_Up.jpg" />
        )
    }else {
        return (
            <img src="Creepy_Thumbs_Down.jpg" />
        )
    }

    // return (
    //     <div></div>
    // )

}

export default Thumb