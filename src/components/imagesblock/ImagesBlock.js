import React from 'react';
import './ImagesBlock.css';
import img1 from '../header/img1.jpg';
import img2 from '../header/img2.jpg';
import img3 from '../header/img3.jpg';
//let urlimage='../header/imag.jpg';
function ImagesBlock(){
return (
    <div className="image-block">
        <div className="image-b">
          <img src={img1} alt="Image1"/>
          <div class="description-b">
           <h4>Image 1</h4>
           <h6>Description ...</h6>
           </div>
        </div>
        <div className="image-b">
          <img src={img2} alt="Image2" />
          <div class="description-b">
           <h4>Image 2</h4>
           <h6>Description ...</h6>
           </div>
        </div>
        <div className="image-b">
          <img src={img3} alt="Image3" />
          <div class="description-b">
           <h4>Image 3</h4>
           <h6>Description ...</h6>
           </div>
        </div>
       
      
        
          
   </div>
);
}

export default ImagesBlock ;