import React from 'react';
import "./card.css"

const Card = ({ticketName, topPrize,gameImageLink, id})=>{

return (

<div class="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 w5">
  <div class="tc">
    <img src={gameImageLink} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
    <h1 class="f3 mb2">{ticketName}</h1>
    <h2 class="f5 fw4 gray mt0">Top prize: ${topPrize}</h2>
  </div>
</div>







);

}

export default Card;