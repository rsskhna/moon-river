import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Location() {
    //TODO замена на Link ссылки

    const [addressValue, setAddressValue] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setAddressValue(event.target.value)
    }

    const handleSubmit = () => {
        if (!addressValue) {
            navigate(`https://yandex.ru/maps`);
        }
        navigate(`https://yandex.ru/maps/213/moscow/search/${addressValue}`);
    }

    return (
        <section className="location" id={'location'}>
            <div className="location__description">
                <h2 className="location__title">Найди <br/> бутик около себя</h2>
                <p className="location__subtitle">
                    Введите свой адрес и узнайте о самых ближайших бутиках к вам
                </p>

                <form className="location__form form" onSubmit={handleSubmit}>
                    <input type="text" name="location"
                           className="form__input" placeholder="Введите адрес" onChange={handleChange}/>

                    <button className="form__button" type='submit'></button>
                </form>
            </div>

            <div className="location__map">

            </div>
        </section>
    )
}