import logo from './imgs/logo.svg';
import './App.css';
import './styles/normalize.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { cardsArr } from './utils/constants.js';
import { useEffect, useState } from 'react';

function App() {
  const [cards, setCards] = useState(cardsArr);

  const [finalSum, setFinalSum] = useState(0);

  function handleFinalSum(cardsToSum) {
    let sum = 0;
    cardsToSum.forEach(card => {
      sum += card.price * card.quantity;
    });
    setFinalSum(sum);
  }

  useEffect(() => {
    handleFinalSum(cards);
  }, [])


  function handleQuantity(id, val) {
    const updatedCards = cards.map(card => 
      card._id === id ? { ...card, quantity: card.quantity + val } : card
    );
    setCards(updatedCards);
    handleFinalSum(updatedCards);
  }

  function handleDelete(id) {
    const updatedCards = cards.filter(elem => elem._id !== id);
    setCards(updatedCards);
    handleFinalSum(updatedCards);
  }
  

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>

      <Header cards={cards} logo={logo}></Header>

      <Main
        handleQuantity={handleQuantity}
        handleDelete={handleDelete}
        cards={cards}
        finalSum={finalSum}
      ></Main>

      <Footer logo={logo}></Footer>

      <div className="App__background"></div>
    </div>
  );
}

export default App;
