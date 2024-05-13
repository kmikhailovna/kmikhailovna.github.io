import { Link } from "react-router-dom";

export default function Footer (){
    return(
        <footer>
  <div className="f-item-con">
    <div className="app-info">
      <span className="app-name">
        <span className="app-initial" />
        ТРОПА ЧУДЕС
      </span>
      <p>
        Вершину нельзя покорить. Ты стоишь на ней считанные минуты, а потом
        ветер сметает твои следы.
      </p>
    </div>
    <div className="useful-links">
      <div className="footer-title">Меню</div>
      <ul>
        <li>
          <Link className="footer-menu" to="/">
            {" "}
            Главная
          </Link>
        </li>
        <li>
          <Link className="footer-menu" to="/entertain">
            Развлечение
          </Link>
        </li>
        <li>
          <Link className="footer-menu" to="/zall">
            Номера
          </Link>
        </li>
        <li>
          <Link className="footer-menu" to="/gallery">
            Галерея
          </Link>
        </li>
        <li>
          <Link className="footer-menu" to="/otsov">
            Отзывы
          </Link>
        </li>
      </ul>
    </div>
    <div className="g-i-t">
      <div className="footer-title">Связаться с нами</div>
      <form action="/" method="post" className="space-y-2">
        <input
          type="text"
          name="g-name"
          className="g-inp"
          id="g-name"
          placeholder="Имя"
        />
        <input
          type="email"
          name="g-email"
          className="g-inp"
          id="g-email"
          placeholder="Почта"
        />
        <textarea
          type="text"
          name="g-msg"
          className="g-inp h-40 resize-none"
          id="g-msg"
          placeholder="Сообщение..."
          defaultValue={""}
        />
        <button type="submit" className="f-btn">
          Отправить
        </button>
      </form>
    </div>
  </div>
  <div className="cr-con">Сочи © 2024 | Все права защищены</div>
</footer>
    )
}