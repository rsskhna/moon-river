export default function Subscription() {
    return (
        <section className="subscription">
            <div className="subscription__image"></div>

            <div className="subscription__description">
                <p className="subscription__subtitle">
                    телефон флагманского магазина
                </p>

                <a className="subscription__phone-number" href="tel:+99995555555">+7 800 456 4560</a>

                <p className="subscription__subtitle">
                    подпишитесь на новости
                </p>

                <form className="subscription__form form">
                    <input type="email" name="email"
                           className="form__input form__input_dark" placeholder="Введите E-mail"/>

                    <button className="form__button form__button_dark"></button>
                </form>
            </div>
        </section>
    )
}