import React from "react";
import Gallery from 'react-grid-gallery'
import { imagePaths } from "../../data/imagePaths";
import './gallery.styles.scss'

const GalleryPage = () => (
    <div className="gallery">
        {
            < Gallery className="gal" images={imagePaths.slice(1,imagePaths.length-1)} rowHeight={600} margin={30} backdropClosesModal={true}/>
        }
    </div>
);


export default GalleryPage;