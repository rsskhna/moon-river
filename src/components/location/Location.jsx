import {useState} from "react";
import {Link} from "react-router-dom";

export default function Location() {
    //TODO замена на Link ссылки

    const [addressValue, setAddressValue] = useState(null);

    const handleChange = (event) => {
        setAddressValue(event.target.value)
    }

    return (
        <section className="location" id={'location'}>
            <div className="location__description">
                <h2 className="location__title">Найди <br/> бутик около себя</h2>
                <p className="location__subtitle">
                    Введите свой адрес и узнайте о самых ближайших бутиках к вам
                </p>

                <form className="location__form form">
                    <input type="text" name="location"
                           className="form__input" placeholder="Введите адрес" onChange={handleChange}/>

                    <Link className="form__button" to={`https://yandex.ru/maps/213/moscow/search/${addressValue}`} target="_blank" rel="noopener noreferrer" />
                </form>
            </div>

            <div className="location__map">

            </div>
        </section>
    )
}