import React from 'react';
import "./card.css"


const Card = ({ticketName,ticketCost, topPrize, gameImageLink, remainingPrizes, overallOddsOfWinning, id})=>{
  
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

return (

<div className="tc ba b--black-20 dib br0 pa3 ma2 grow bw1 bg-near-white w5 hide-child relative">

<h2 id={id} className=" tl f5 fw4 dark-gray mt0">{formatter.format(ticketCost)}</h2>
  <div className="tc">
    <img rel="dns-prefetch" src={"https://res.cloudinary.com/babyhulk/image/fetch/w_140,h_140,c_fill,g_face,r_20,f_auto/" + gameImageLink} className=" h4 w4 dib pa2" title="Lotto ticket" alt="Lotto Ticket"/>
    <h1 className="f3 mb2 truncate">{ticketName}</h1>
    <hr className="mw4 bb bw1 b--black-10"></hr>
    <h2 className="number f5 fw4 dark-gray mt0">Top prize: {formatter.format(topPrize)}</h2>
    <h2 className="f5 fw4 dark-gray mt0">Top prize remaining: {remainingPrizes}</h2>
    <h2 className="f5 fw4 dark-gray mt0">Odds of winning: {overallOddsOfWinning}</h2>
  </div>
</div>
);
}

export default Card;