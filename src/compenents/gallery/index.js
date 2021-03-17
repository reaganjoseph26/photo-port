import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg'

 function Gallery(props) {
      // every gallery page will have both a name and description, use object to keep track of the gallery's data
    const currentCategory = {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    };
    
    return (
      <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p>
        <div className="flex-row">
            <img
              src={photo}
              alt="Commercial Example"
              className="img-thumbnail mx-1"
            />
        </div>
      </section>
    );
}
  
export default Gallery;