import React from 'react';
import "./card.css"

const Card = ({ticketName, topPrize, gameImageLink, remainingPrizes, overallOddsOfWinning, id})=>{

return (
<div class="tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 w5">
  <div class="tc">
    <img src={gameImageLink} class="br-50 h4 w4 dib ba b--black-05 pa2" title="Lotto ticket"/>
    <h1 class="f3 mb2 truncate">{ticketName}</h1>
    <hr class="mw4 bb bw1 b--black-10"></hr>
    <h2 class="f5 fw4 gray mt0">Top prize remaining : {remainingPrizes}</h2>
    <h2 class="f5 fw4 gray mt0">Odds of winning : {overallOddsOfWinning}</h2>
  </div>
</div>
);
}

export default Card;