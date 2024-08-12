import footerLogo from '../../images/logo-footer.svg'
import {footerLinks} from "../../utils/data.js";

const linkItem = footerLinks.map(
    link =>
        <li className="footer__link-item" key={link.id}>
            <a className="footer__link">{link.linkTextContent}</a>
        </li>
)

export default function Footer() {
    return (
        <footer className="footer">
            <nav className="footer__navigation">
            <ul className="footer__links">
                {linkItem}
            </ul>
            </nav>

            <div className="footer__info">
                <a href={'#'}>
                    <img className="footer__logo" src={footerLogo} alt="Moon River"/>
                </a>

                <div className="footer__contacts">
                    <p className="footer__section-title">телефон горячей линии</p>

                    <a className="footer__phone-number" href="tel:+99995555555">+7 800 456 4560</a>

                    <ul className="social-icons">
                        <li className="social-icons__item">
                            <a className="social-icons__link social-icons__link_facebook"></a>
                        </li>

                        <li className="social-icons__item">
                            <a className="social-icons__link social-icons__link_instagram"></a>
                        </li>
                    </ul>
                </div>

                <div className="footer__news">
                    <p className="footer__section-title">подпишитесь на новости</p>

                    <form className="footer__form form">
                        <input type="email" name="email"
                               className="form__input" placeholder="Введите E-mail"/>

                        <button className="form__button"></button>
                    </form>

                    <ul className="mobile-apps">
                        <li className="mobile-apps__item">
                            <a className="mobile-apps__link mobile-apps__link_AppStore"></a>
                        </li>

                        <li className="mobile-apps__item">
                            <a className="mobile-apps__link mobile-apps__link_GooglePlay"></a>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}