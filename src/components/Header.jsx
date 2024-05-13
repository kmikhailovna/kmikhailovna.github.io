import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
        </label>
        <ul className="menu__box">
          <li>
            <Link className="menu__item" to="/">
                Главная
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/entertain">
                Развлечения
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/zall">
                Номера
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/gallery">
                Галерея
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/otsov">
                Отзывы
            </Link>
          </li>
        </ul>
</div>
    )
}