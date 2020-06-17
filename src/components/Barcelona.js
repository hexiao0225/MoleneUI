import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";
import Paragraph from "./Paragraph"
import {parseText} from "../util/helper"

const quote = "Life is short, life is dull, life is full of pain and this is the chance for something special."

const p1 = "My first encounter with the city comes from Woody Allen’s film Vicky, Cristina, Barcelona. Having watched it once in middle school, I decided to watch it again before I travel. I was not a fan of the film’s chaotic, erotic, complicated men-women relationship plot. What I did remember from this crazy, funny, chaotic film was the beauty of Penelope Cruz, the sound of Spanish guitar and Gaudi’s Park Guell. This was August 2019."

const todos = "I gave myself a touristy to-do list. \n Buy telephone card with data \n International charger adaptor \n Take a bus to Park Guell \n Go to Palace del Sol and find a coffee shop \n Passeig de Garcia \n Visit a town by the seaside \n"
const Barcelona =({content}) => {
    const {title,images,coverImage,threePortraitImages,cityDescription,description} = content;

    return (
        <div className='country-page'>
          <Introduction titleSize={"large"} url={coverImage} title={title} />
          <Spacer size={"sm"}/>
          <BlockQuote author={"Vicky, Cristina, Barcelona"} quote={quote}/>
          <Spacer size={"sm"}/>
          <ImageWithText text={quote} image={images[0]} />
          <ThreeImagesInRowGallery images={images.slice(10,13)}/>
          <Paragraph text={parseText(todos)}/>
          <Spacer size={"sm"}/>
          <FullbleedImageWithText title={'Spain'} text={p1} image={images[1]}/>
          <EightImagesGallery landscapeUrls={images.slice(2,6)} portraitUrls={images.slice(6,10)}/>
          <Introduction
            url={images[11]}
            titleSize={"small"}
            title={"Barcelona"}
          />
          <BlockQuote author={"some one"} quote={quote} />
          <ThreeImagesInRowGallery images={images.slice(12,15)} />
          <Spacer />
        </div>
    );
  
}

export default Barcelona;
