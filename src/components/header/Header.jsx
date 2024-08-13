import logoHeader from '../../images/logo/logo-header.svg';

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logoHeader} alt={"Moon River"}/>

            <ul className="header__nav">
                <li>
                    <a className="header__nav_link" href={'#catalog'}>Каталог</a>
                </li>

                <li>
                    <a className="header__nav_link" href={'#subscription'}>Контакты</a>
                </li>

                <li>
                    <a className="header__nav_link" href={'#location'}>Адреса</a>
                </li>
            </ul>
        </header>
    )
}