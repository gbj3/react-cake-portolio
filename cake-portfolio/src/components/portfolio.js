// import React from "react";
// import { Image } from 'react-bootstrap';

// // Create a context for images in the specified directory
// const images = require.context('./images/cakes', true);
// // Map over the keys and get the actual image paths
// const imageList = images.keys().map(key => images(key).default);

// const Portfolio = () => (
//   <div className="App">
//     {imageList.map((image, index) => (
//       <Image key={index} src={image} alt={`image-${index}`} />
//     ))}
//   </div>
// );

// export default Portfolio;

import React from 'react';

// Function to import all images from a directory dynamically
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Dynamically import all images from the images folder
const images = importAll(require.context('./images/cakes', false, /\.(png|jpe?g|svg)$/));

// React component to display the images
function Portfolio() {
  return (
    <div>
      {Object.keys(images).map((imageName, index) => (
        <img key={index} src={images[imageName].default} alt={imageName} />
      ))}
    </div>
  );
}

export default Portfolio;
