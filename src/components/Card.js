import React from 'react';

const Card = ({ticketName, topPrize,gameImageLink, id})=>{

return (
<div className='tc  dib br3 pa3 ma2 grow bw2 shadow-5'> 
    <img src={gameImageLink} alt='Ticket'></img>

    <div>
        <h2>{ticketName}</h2>
        <p>${topPrize}</p>
    </div>
</div>

);

}

export default Card;