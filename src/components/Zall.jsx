import { Link } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import "./zall.css"

export function Zall(){
    return(
    <div id="zal">
    <Header />
  <section className="parallax-container">
    <h1>Наши номера </h1>
  </section>
  <ul className="cards">
    <li>
      <a href="" className="card">
        <img
          src="https://optim.tildacdn.com/tild6363-6235-4437-b632-383039393231/-/format/webp/IMG_8698.jpg"
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://celes.club/uploads/posts/2021-12/1640814172_9-celes-club-p-turbaza-zimoi-priroda-krasivo-foto-11.jpg"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="card__title">Коттедж1 (Дом Богатыря)</h3>
              <span className="card__status">от 11 000 рублей в сутки</span>
            </div>
          </div>
          <p className="card__description">
            Просторный коттедж из сруба (240 кв.м) на 8-10 человек.
          </p>
          <div className="buttons-container"></div>
        </div>
      </a>
    </li>
    <li>
      <a href="" className="card">
        <img
          src="https://optim.tildacdn.com/tild3530-3030-4534-a132-373132653039/-/format/webp/IMG_8582.jpg"
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://celes.club/uploads/posts/2021-12/1640814172_9-celes-club-p-turbaza-zimoi-priroda-krasivo-foto-11.jpg"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="card__title">Коттедж2 (МаксиДом)</h3>
              <span className="card__status">от 13 000 рублей в сутки</span>
            </div>
          </div>
          <p className="card__description">
            Коттедж на большую компанию (470 кв.м) на 14 человек (возможно
            размещение до 18 человек).
          </p>
        </div>
      </a>
    </li>
    <li>
      <a href="" className="card">
        <img
          src="https://optim.tildacdn.com/tild6264-3433-4566-a365-363261306133/-/format/webp/IMG_8568.jpg"
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://celes.club/uploads/posts/2021-12/1640814172_9-celes-club-p-turbaza-zimoi-priroda-krasivo-foto-11.jpg"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="card__title">Коттедж3 (Стеклянный)</h3>
              <span className="card__status">от 10 000 рублей в сутки</span>
            </div>
          </div>
          <p className="card__description">
            Просторный дом из клееного бруса (200кв.м) на 8 человек
          </p>
        </div>
      </a>
    </li>
    <li>
      <a href="" className="card">
        <img
          src="https://optim.tildacdn.com/tild3335-3131-4162-b463-386636643763/-/format/webp/IMG_8771.jpg"
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://celes.club/uploads/posts/2021-12/1640814172_9-celes-club-p-turbaza-zimoi-priroda-krasivo-foto-11.jpg"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="card__title">Коттедж4 (Дом Охотника)</h3>
              <span className="card__status">от 8 000 рублей</span>
            </div>
          </div>
          <p className="card__description">
            Коттедж из сруба (140 кв.м ) на 6 человек.{" "}
          </p>
        </div>
      </a>
    </li>
    <li>
      <a href="" className="card">
        <img
          src="https://optim.tildacdn.com/tild6461-6337-4264-a361-373234653234/-/format/webp/image25.jpeg"
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://avatars.mds.yandex.net/get-altay/200322/2a0000015b21820a58f7cb05e3dec3794603/XXL"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="card__title">Дворец</h3>
              <span className="card__status">от 50 000 рублей в сутки</span>
            </div>
          </div>
          <p className="card__description">
            Роскошный Дворец 1200 кв.м. на берегу озера. Подходит для компании
            12-28 человек.
          </p>
        </div>
      </a>
    </li>
    <li>
      <a href="" className="card">
        <img
          src="https://optim.tildacdn.com/tild3530-6164-4163-b735-316534656532/-/format/webp/7cb6e79d-d881-4cac-8.jpg"
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://static.tildacdn.com/tild6135-6564-4132-a139-626266663738/bisikom_2.jpg"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="card__title">Дом Студия </h3>
              {/* <span class="card__tagline">Lorem ipsum dolor sit amet</span>             */}
              <span className="card__status">от 5 500 рублей в сутки </span>
            </div>
          </div>
          <p className="card__description">
            Коттедж-Студия с террасой с видом на лес. Рассчитанный на 2+2
            человека
          </p>
        </div>
      </a>
    </li>
  </ul>
  <div className="container">
    <Link to="/bron" className="btn">
      Забронировать
    </Link>
  </div>
  <h2>Правила заселения</h2>
  <div
    style={{ visibility: "hidden", position: "absolute", width: 0, height: 0 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol viewBox="0 0 24 24" id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </symbol>
      <symbol viewBox="0 0 24 24" id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </symbol>
    </svg>
  </div>
  <details open="">
    <summary>
      Во сколько нужно заселиться?
      <svg
        className="control-icon control-icon-expand"
        width={24}
        height={24}
        role="presentation"
      >
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref="#expand-more"
        />
      </svg>
      <svg
        className="control-icon control-icon-close"
        width={24}
        height={24}
        role="presentation"
      >
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
      </svg>
    </summary>
    <p>Расчетный час: время заезда - 16:00 время выезда - 14:00.</p>
  </details>
  <details>
    <summary>
      Можно ли заселиться большим количеством человек в дом?
      <svg
        className="control-icon control-icon-expand"
        width={24}
        height={24}
        role="presentation"
      >
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref="#expand-more"
        />
      </svg>
      <svg
        className="control-icon control-icon-close"
        width={24}
        height={24}
        role="presentation"
      >
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
      </svg>
    </summary>
    <p>Дополнительное место - 1500 руб. с человека в сутки</p>
  </details>
  <details>
    <summary>
      По каким кретериям заселяются дети ?
      <svg
        className="control-icon control-icon-expand"
        width={24}
        height={24}
        role="presentation"
      >
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref="#expand-more"
        />
      </svg>
      <svg
        className="control-icon control-icon-close"
        width={24}
        height={24}
        role="presentation"
      >
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
      </svg>
    </summary>
    <p>
      Дети до 6 лет размещаются бесплатно, если не занимают отдельного места.
      Дети с 7 до 11 лет на дополнительных местах размещаются за 50% от
      стоимости доп. места. Дети с 12 лет на дополнительных местах размещаются
      за полную стоимость.
    </p>
  </details>
  <details>
    <summary>
      Можно ли к вам с домашним животным ?
      <svg
        className="control-icon control-icon-expand"
        width={24}
        height={24}
        role="presentation"
      >
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref="#expand-more"
        />
      </svg>
      <svg
        className="control-icon control-icon-close"
        width={24}
        height={24}
        role="presentation"
      >
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
      </svg>
    </summary>
    <p>
      Проживание домашних животных (высотой в холке не более 30 см) - 300
      руб./сут.
    </p>
  </details>
  <Footer />
</div>

    )
}