import shuffle from 'lodash.shuffle';
import ImagesCards from './imagesCards'
const NUMBER_OF_CARDS = 8 ;
export default ()=>{
  const imagesCards = ImagesCards()
  let cards =[];
  while(cards.length < NUMBER_OF_CARDS){
    const index = Math.floor(Math.random() * imagesCards.length);
    const card = {
      image:'https://adevlabswo904.blob.core.windows.net/memorygame/'+imagesCards.splice(index,1)[0]+'.png',
      itWasGuessed:false,
      }
    cards.push(card);
    cards.push({...card})
  }
  return shuffle(cards)
};

