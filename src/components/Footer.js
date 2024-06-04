
import '../styles/Footer.css'
import { footerMenu, footerDocMenu, phone, email } from '../utils/constants.js';

function Footer(props) {

  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <img src={props.logo} className="footer__logo" alt="logo" />
          <nav className="footer__menu footer__top-menu">
          { footerMenu.map((item, i) => (
            <a href="#" className="footer__menu-item">{item.anchor}</a>
          ))}
          </nav>

          <div className="footer__contacts">
            <a href={`tel: ${phone}`} className="footer__menu-item footer__phone">{phone}</a>
            <a href={`mailto: ${email}`} className="footer__menu-item footer__email">{ email }</a>
          </div>
        </div>
        
        <div className="footer__bottom">
          <div className="footer__copyright">
            <span>© 2009–2019, ООО «MIDAS», официальный сайт</span>
          </div>

          <nav className="footer__menu">
          { footerDocMenu.map((item, i) => (
            <a href="#" className="footer__menu-item">{item.anchor}</a>
          ))}
          </nav>
        </div> 
      </div>
    </footer>
    </>
  );
}

export default Footer;