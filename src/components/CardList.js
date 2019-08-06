import React from "react";
import Card from "./Card";

const CardList = function({ robots, lotto }) {

  const cardComponent = lotto.map((user, i) => {
    return (
      <Card
        key={lotto[i]._id}
        id={lotto[i].id}
        gameImageLink= {lotto[i].gameImageLink}
        ticketName={lotto[i].ticketName}
        ticketCost={lotto[i].ticketCost}
        topPrize={lotto[i].topPrize}
        remainingPrizes={lotto[i].remainingPrizes}
        overallOddsOfWinning={lotto[i].overallOddsOfWinning}
      />
    );
  });

  return <div>{cardComponent}</div>;
};

export default CardList;
