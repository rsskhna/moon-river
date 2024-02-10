export default function Location() {
    return (
        <section className="location">
            <div className="location__description">
                <h2 className="location__title">Найди <br/> бутик около себя</h2>
                <p className="location__subtitle">
                    Введите свой адрес и узнайте о самых ближайших бутиках к вам
                </p>

                <form className="location__form form">
                    <input type="text" name="location"
                           className="form__input" placeholder="Введите адрес"/>

                        <button className="form__button"></button>
                </form>
            </div>

            <div className="location__map">

            </div>
        </section>
    )
}