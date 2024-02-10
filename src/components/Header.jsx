import logoHeader from '../images/logo-header.svg';
import {headerIcons} from "../data.js";

const listOfIcons = headerIcons.map(
    icon =>
        <li className="header__icon" key={icon.id}>
            <a className="header__icon-link" href={icon.href}>
                <img className="header__icon-img" src={icon.src} alt={icon.id}/>
            </a>
        </li>
);

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logoHeader} alt={"Moon River"}/>

            <ul className="header__icons">
                {listOfIcons}
            </ul>

            <button className="header__menu" type="button"></button>
        </header>
    )
}