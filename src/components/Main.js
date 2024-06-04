import '../styles/Main.css';
import Card from './Card.js';
import Form from './Form.js';

function Main(props) {

  function divideByDigits(number) {
    return number.toLocaleString('ru-RU');
  }

  return (
    <>
    <main className="main">
      <div className="container">
        <div className="main__header">
          <div className="main__header-h1-container">
            <h1 className="main__header-h1">Корзина</h1>
            <span className="main__header-val">{props.cards.length} шт</span>
          </div>
        </div>

        <div className="main__breadcrumbs">
          <a className="main__breadcrumbs-item" href="#">Главная</a>
          <span className="main__breadcrumbs-item main__breadcrumbs-item_active">Корзина</span>
        </div>
        
        <div className="main__table">
          <div className="table-head mobile-none">
              <span className="table-head__item table-head__main">Блюдо:</span>

              <span className="table-head__item">Цена:</span>

              <span className="table-head__item">Кол-во:</span>

              <span className="table-head__item">Сумма:</span>
          </div>

          <div className="main__cards">
            

            { props.cards.map((card, i) => (
              <Card
                handleQuantity={props.handleQuantity}
                handleDelete={props.handleDelete}
                key={card._id}
                card={card}
                divideByDigits={divideByDigits}
              />
            ))}
            
          </div>

          <Form
            finalSum = {props.finalSum}
            divideByDigits={divideByDigits}
          ></Form>

        </div>
      </div>
      <div className="main__background"></div>
    </main>
    </>
  );
}

export default Main;
