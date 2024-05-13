import { Link } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import "./css.css"

export function FitList(){
    return (
        <div id="fit">
        <Header />
        <section className="parallax-container">
            <h1>ТРОПА ЧУДЕС</h1>
        <p className="text">
      Вершину нельзя покорить. Ты стоишь на ней считанные минуты, а потом ветер
      сметает твои следы.
        </p>
        </section>
        <section className="buffer"> Развлечения</section>
        <section className="parallax-container parallax-container2">
    <div className="card">
      <div className="card-img" />
      <h3>Качели в горах</h3>
      <p>
        Люди которые катаются на качелях испытывают непередаваемые чувства, паря в воздухе,
        как птица, и глядя сверху вниз на горы.
      </p>
      <Link to="/entertain">Узнать больше</Link>
    </div>
    <div className="card">
      <div className="card-img" />
      <h3>Kатание на лыжах</h3>
      <p>
        Одно из самых популярных зимних видов спорта и развлечений, которое
        включает в себя спуск с горы на двух специальных лыжах.
      </p>
      <Link to="/entertain">Узнать больше</Link>
    </div>
    <div className="card">
      <div className="card-img" />
      <h3>Катание на Снегоходах</h3>
      <p>
        Одно из самых популярных экстремальных развлечений, которое позволяет ощутить скорость
        и адреналин на заснеженных трассах.
      </p>
      <Link to="/entertain">Узнать больше</Link>
    </div>
    <div className="card"></div>
  </section>
  <section className="buffer"> Номера</section>
  <section className="parallax-container parallax-container2">
    <div className="card_nomera">
      <div className="card-img" />
      <h3>Эконом номера</h3>
      <p>
        Стандартный номер в отеле, который предлагает базовые удобства для
        комфортного проживания.
      </p>
      <Link to="/zall">Узнать больше</Link>
    </div>
    <div className="card_nomera">
      <div className="card-img" />
      <h3>Премиальные номера</h3>
      <p>
        Комфортабельный номер в отеле, который предлагает максимальный уровень
        удобства и услуг для гостей.
      </p>
      <Link to="/zall">Узнать больше</Link>
    </div>
    <div className="card_nomera">
      <div className="card-img" />
      <h3>Люкс номера</h3>
      <p>
        Высокий уровень гостиничного размещения, который предлагает
        максимальные удобства и роскошь.
      </p>
      <Link to="/zall">Узнать больше</Link>
    </div>
    <div className="card_nomera"></div>
  </section>
  <Footer />
 </div>
)
}