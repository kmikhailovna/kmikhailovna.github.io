import Footer from "./Footer"
import Header from "./Header"
import "./otsov.css"

export function Otsov (){
    return (
        <div id="ots">
            <Header />
        <div className="outerdiv">
  <div className="innerdiv">
    {/* div1 */}
    <div className="div1 eachdiv">
      <div className="userdetails">
        <div className="imgbox">
          <img
            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
            alt=""
          />
        </div>
        <div className="detbox">
          <p className="name">Даниил Бобриенко</p>
          <p className="designation">Гость</p>
        </div>
      </div>
      <div className="review">
        <h4>
          Незабываемые впечатления и эмоции. Так все здорово придумано, сделано,
          обслужено!
        </h4>
        <p>
          “ Отдыхали с семьёй традиционно на свой день рождения в декабре. Как
          всегда всё было супер! Отзывчивые девушки на ресепшн всегда
          приветливые) И даже когда на короткое время отключили свет-Елена с
          ресепшн позвонила и предложила бесплатный завтрак и дрова для камина.
          Это очень приятно! Всем рекомендую отдыхать здесь! И нашим собакам
          было комфортно и уезжать нам совсем не хотелось.”
        </p>
      </div>
    </div>
    {/* div2 */}
    <div className="div2 eachdiv">
      <div className="userdetails">
        <div className="imgbox">
          <img
            src="https://yobte.ru/uploads/posts/2020-01/aleksis-bledel-29-foto-18.jpg"
            alt=""
          />
        </div>
        <div className="detbox">
          <p className="name">Варвара Цветкова</p>
          <p className="designation">Постоянный гость</p>
        </div>
      </div>
      <div className="review">
        <h4>Лучшее место для отдыха!</h4>
        <p>
          “Приезжаем не в первый раз. Пожалуй, лучшее место отдыха. Прекрасный
          персонал, отличная еда, замечательный бассейн.Рекомендуем всем
          знакомым. ”
        </p>
      </div>
    </div>
    {/* div3 */}
    <div className="div3 eachdiv">
      <div className="userdetails">
        <div className="imgbox">
          <img
            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
            alt=""
          />
        </div>
        <div className="detbox">
          <p className="name dark">Кира Еноктаева</p>
          <p className="designation dark">Гость</p>
        </div>
      </div>
      <div className="review dark">
        <h4>Еще вернемся! И не раз!</h4>
        <p>
          “Спасибо огромное за прекрасный отдых, заботливое отношение и приятные
          впечатления, которые остаются после каждого приезда. Первый раз были в
          марте 2023 года, второй раз приехали в июле. Природа впечатляет в
          любое время года. Здесь никто не остаётся равнодушным - всем найдётся
          занятие по душе - и тем, кто любит активный отдых, и тем, кто
          предпочитает уединение. В марте любовались снежными соснами, а в июле
          собирали чернику, землянику, малину. Брали полный пансион - остались
          довольные и сытые, всё очень вкусно.”
        </p>
      </div>
    </div>
    {/* div4 */}
    <div className="div4 eachdiv">
      <div className="userdetails">
        <div className="imgbox">
          <img
            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
            alt=""
          />
        </div>
        <div className="detbox">
          <p className="name dark">Егор Абрамов</p>
          <p className="designation dark">Гость</p>
        </div>
      </div>
      <div className="review dark">
        <h4>Место, где можно отдохнуть.</h4>
        <p>
          “ На базе ВСЕГДА тихо, спокойно и красиво. Вне зависимости от
          количества размещённых на ней людей. Можно гулять, плавать, кутаться
          на лыжах. А что самое важное - отдыхать душой”
        </p>
      </div>
    </div>
    {/* div5 */}
    <div className="div5 eachdiv">
      <div className="userdetails">
        <div className="imgbox">
          <img
            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
            alt=""
          />
        </div>
        <div className="detbox">
          <p className="name">Олеся Арбузова</p>
          <p className="designation">Постоянный гость</p>
        </div>
      </div>
      <div className="review">
        <h4>Самый лучший сервис! Всегда чисто и уютно.</h4>
        <p>
          “ Ездим отдохнуть от города и повариться в купели. 
          Видно что дом  после капитального ремонта,
          везде чистота и новая техника. Сказали что к летнему сезону,номерной фонд еще обновится.Удобно что сауна почти в каждом доме. Нам было максимально комфортно кататься на лыжах а после тренировки посидеть в теплой сауне. 
          База всесезонная. Зимой можно кататься на финских санях,беговых лыжах.Есть пару подьемов и спусков.Можно смело проводить корпоративные соревнования!
           Трасса идет по кругу,когда много снега можно катить прямо от дома. ”
        </p>
      </div>
    </div>
  </div>
</div>
<Footer />
</div>
    )
}