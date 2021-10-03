import React from "react";
import './image.styles.scss'

const Image = (imageURL) => (
    <div>
        <img src={imageURL} alt="broken"/>
    </div>
)

export default Image;