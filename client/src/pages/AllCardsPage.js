import React from "react";
import CardComp from "../components/my-cards/CardComp";

function AllCardsPage() {
  const [allCards, setAllCards] = React.useState([]);

  //fetching all the cards of all of the buizzness users
  React.useEffect(() => {
    fetch("http://localhost:3000/api/users/allcards")
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);

  return (
    <>
      <h1>This is all cards</h1>
      {allCards.map((card, index) => (
        <CardComp key={index} card={card} />
      ))}
    </>
  );
}

export default AllCardsPage;
