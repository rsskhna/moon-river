import ringImage from '../../images/lead/ring.svg';
import {languageList} from "../../utils/data.js";

const listOfLanguages = languageList.map(
    language =>
        <li className="lead__language-item" key={language.id}>
            <a className="lead__language-link">{language.id}</a>
        </li>
)

export default function Lead() {
    return (
        <section className="lead">
            <div className="lead__title-img-area">
                <div className="lead__title-subtitle-area">
                    <h1 className="lead__title">high jewelry</h1>

                    <div className="lead__subtitle">
                        <div className="lead__line line-element"></div>

                        <a className="lead__link" href="#products">Смотреть коллекцию</a>
                    </div>
                </div>

                <img className="lead__ring-img" src={ringImage} alt="Кольцо"/>
            </div>

            <div className="lead__language-caption-area">
                <ul className="lead__language">
                    {listOfLanguages}
                </ul>

                <div className="lead__caption caption">
                    <p className="caption__product-name">КОЛЬЦО TRINITY, Cartier</p>

                    <p className="caption__product-description">Белое золото, бриллианты</p>

                    <p className="caption__product-price">498 000 ₽</p>
                </div>
            </div>
        </section>
    )
}