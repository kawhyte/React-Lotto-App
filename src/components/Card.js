import React from 'react';
import "./card.css"

const Card = ({ticketName, topPrize, gameImageLink, remainingPrizes, overallOddsOfWinning, id})=>{

return (
<div className="tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 w5">
<h2 id={1} className=" tl f5 fw4 gray mt0">${remainingPrizes}</h2>
  <div className="tc">
    <img src={gameImageLink} className="br-50 h4 w4 dib ba b--black-05 pa2" title="Lotto ticket" alt="Lotto Ticket"/>
    <h1 className="f3 mb2 truncate">{ticketName}</h1>
    <hr className="mw4 bb bw1 b--black-10"></hr>
    <h2 className="number f5 fw4 gray mt0">Top prize: ${topPrize}</h2>
    <h2 className="f5 fw4 gray mt0">Top prize remaining: {remainingPrizes}</h2>
    <h2 className="f5 fw4 gray mt0">Odds of winning: {overallOddsOfWinning}</h2>
  </div>
</div>
);
}

export default Card;