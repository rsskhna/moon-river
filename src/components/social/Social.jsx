import {socialImages} from "../../utils/data.js";

const socialImagesItem = socialImages.map(
    image =>
        <li className="social__image" key={image.id}>
            <img className="social__image-item" src={image.img} alt=""/>
        </li>
)

export default function Social() {
    return (
        <section className="social">
            <h2 className="social__title">Мы в социальных сетях</h2>

            <ul className="social__images">
                {socialImagesItem}
            </ul>

            <div className="social__bottom-panel">
                <ul className="social-icons">
                    <li className="social-icons__item">
                        <a className="social-icons__link social-icons__link_facebook"></a>
                    </li>

                    <li className="social-icons__item">
                        <a className="social-icons__link social-icons__link_instagram"></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}