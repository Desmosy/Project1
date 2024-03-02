import React from "react";
import "./Card.css";
export const Card=({
    imageSrc, imageAlt, title, description, button, link
})=>{
    return(
        <div className="card-container">
            <img className="card-img" src={imageSrc} alt="Image" />
            <h1 className="title">{title}</h1>

            <p className="card-description">{description}</p>
            <a href={`http://${link}`} className="card-button" target="_blank" rel="noopener noreferrer">Visit Now</a>
        </div>
    )
}