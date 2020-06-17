import React from "react";
import Introduction from "./Introduction";
import ScrollIndicator from "./ScrollIndicator";
import ImageWithText from './ImageWithText'
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import Paragraph from "./Paragraph"

const Barcelona =({content}) => {
    const {title,images,coverImage,threePortraitImages,cityDescription,description} = content;

    return (
        <div className='country-page'>
          <Introduction titleSize={"large"} url={coverImage} title={title} />
          <ScrollIndicator />
          <ImageWithText text={description} image={images[2]}/>
          <Paragraph text={cityDescription} />
        </div>
    );
  
}

export default Barcelona;
