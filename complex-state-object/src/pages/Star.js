import React from "react";
import starFilled from "../../public/star-filled.png"
import star from "../../public/start-empty.png"

export default function Star(props) {
    console.log(props);

    const starIcon = props.isFilled
        ? "star-filled.png"
        : "start-empty.png";

    return (
        <>
        {props.isFilled ?   <img
            src={star.src}
            className="card--favourite"
            onClick={props.handleClick}
        /> : 
        <img
            src={starFilled.src}
            className="card--favourite"
            onClick={props.handleClick}
        />
        }
   
        
        </>
    );
}