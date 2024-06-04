import Picture from '../components/Picture';
import '../styles/Card.css'

function Card(props) {

  const sum = props.card.price * props.card.quantity;

  return (
    <>
    
      <div className="card">
        <div className="card__img">
          <Picture
            imgWebp2x={props.card.imgWebp}
            imgJpg2x={props.card.imgJpg}
            alt={props.card.title}
          ></Picture>
        </div>

        <div className="card__main">
          <span className="card__title">{props.card.title}</span>
          {props.card.description && (
          <p className="card__description">{props.card.description}</p>
          )}
          <span className="card__weight">{props.card.weight} г</span>
        </div>

        <div className="card__price">
          <span className="card__label mobile-block">Цена:</span>
          <span>{props.card.price} &#8381;</span>
        </div>

        <div className="card__quantity">
          <div className="card__quantity-container">
            <button className="card__quantity-handle" onClick={() => props.handleQuantity(props.card._id, -1)} disabled={props.card.quantity < 1 && "disabled"}>&minus;</button>
            <span className="card__quantity-value">{props.card.quantity} шт</span>
            <button className="card__quantity-handle" onClick={() => props.handleQuantity(props.card._id, 1)}>+</button>
          </div>
        </div>

        <div className="card__sum">
          <span className="card__label mobile-block">Сумма:</span>
          <span>{props.divideByDigits(sum)} &#8381;</span>
        </div>

        <div className="card__delete">
          <button className="card__delete-button" onClick={() => props.handleDelete(props.card._id)}></button>
        </div>
      </div>
    
    </>
  );
}

export default Card;