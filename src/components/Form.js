import '../styles/Form.css';

function Form(props) {
  return (
    <>
    <div className="form-container">
      <form className="form">
        <p className="form__text form__margin1">Применить промокод:</p>
        <input className="input-text form__margin2" type="text" />
        <button className="form__col-right button-transparent">Применить</button>
        <p className="form__text form__margin3">Итого к оплате:<span className="form__sum">{props.divideByDigits(props.finalSum)} ₽</span></p>
        <button className="button-fill">Оформить заказ</button>
      </form>
    </div>
    </>
  );
}

export default Form;
