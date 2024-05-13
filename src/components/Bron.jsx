import "./bron.css"
import "./bootstrap.bron.css"
export function Bron(){
    return(
        <div id="brn">
        <div id="booking" className="section">
  <div className="section-center">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-md-push-5">
          <div className="booking-cta">
            <h1>Тропа Чудес</h1>
            <p>
              Вершину нельзя покорить. Ты стоишь на ней считанные минуты, а
              потом ветер сметает твои следы.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-md-pull-7">
          <div className="booking-form">
            <form>
              <div className="form-group">
                <span className="form-label">Ваше имя</span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <span className="form-label">Дата заезда</span>
                    <input className="form-control" type="date" required="" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <span className="form-label">Дата выезда</span>
                    <input className="form-control" type="date" required="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <span className="form-label">Взрослые</span>
                    <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>Другое количество</option>
                    </select>
                    <span className="select-arrow" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <span className="form-label">Дети</span>
                    <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>Другое количество</option>
                    </select>
                    <span className="select-arrow" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <span className="form-label">Номер</span>
                    <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>Дворец</option>
                      <option>Студия</option>
                    </select>
                    <span className="select-arrow" />
                  </div>
                </div>
              </div>
              <div className="form-btn">
                <button className="submit-btn">Забронировать</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    )
}