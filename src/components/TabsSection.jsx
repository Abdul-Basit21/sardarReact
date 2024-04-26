import "./TabsSection.scss";
import arrow_green from "../assets/arrow-green-up.svg";
import arrow_red from "../assets/arrow-red-down.svg";
const TabsSection = () => {
  return (
    <>
      <div className="tabs-wrapper bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tabs-links d-flex gap-5 pb-2">
                <a href="#!" className="active">
                  Ana sayfa
                </a>
                <a href="#!">Altin fiyatlari</a>
                <a href="#!">Altin cevirici</a>
                <a href="#!">Haberler</a>
                <a href="#!">Doviz</a>
                <a href="#!">Uzman yorumlari</a>
                <a href="#!">Community</a>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="tabs-content d-grid gap-5">
                <div className="item d-flex align-items-center justify-content-center">
                  <div className="content d-flex flex-column gap-2">
                    <span className="title">ALTIN ONS</span>
                    <span className="value">2.492,87</span>
                    <div className="ratio__ green d-flex align-items-center gap-2">
                      <img src={arrow_green} alt="arrow-green" />
                      <span className="percent__">%1,27</span>
                      <span className="number__">11,27</span>
                    </div>
                  </div>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                  <div className="content d-flex flex-column gap-2">
                    <span className="title">DOLAR</span>
                    <span className="value">2.492,87</span>
                    <div className="ratio__ green d-flex align-items-center gap-2">
                      <img src={arrow_green} alt="arrow-green" />
                      <span className="percent__">%1,27</span>
                      <span className="number__">11,27</span>
                    </div>
                  </div>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                  <div className="content d-flex flex-column gap-2">
                    <span className="title">EURO</span>
                    <span className="value">2.492,87</span>
                    <div className="ratio__ red d-flex align-items-center gap-2">
                      <img src={arrow_red} alt="arrow-green" />
                      <span className="percent__">%1,27</span>
                      <span className="number__">11,27</span>
                    </div>
                  </div>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                  <div className="content d-flex flex-column gap-2">
                    <span className="title">DOLAR</span>
                    <span className="value">2.492,87</span>
                    <div className="ratio__ green d-flex align-items-center gap-2">
                      <img src={arrow_green} alt="arrow-green" />
                      <span className="percent__">%1,27</span>
                      <span className="number__">11,27</span>
                    </div>
                  </div>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                  <div className="content d-flex flex-column gap-2">
                    <span className="title">DOLAR</span>
                    <span className="value">2.492,87</span>
                    <div className="ratio__ green d-flex align-items-center gap-2">
                      <img src={arrow_green} alt="arrow-green" />
                      <span className="percent__">%1,27</span>
                      <span className="number__">11,27</span>
                    </div>
                  </div>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                  <div className="content d-flex flex-column gap-2">
                    <span className="title">EURO</span>
                    <span className="value">2.492,87</span>
                    <div className="ratio__ red d-flex align-items-center gap-2">
                      <img src={arrow_red} alt="arrow-green" />
                      <span className="percent__">%1,27</span>
                      <span className="number__">11,27</span>
                    </div>
                  </div>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                  <div className="content d-flex flex-column gap-2">
                    <span className="title">EURO</span>
                    <span className="value">2.492,87</span>
                    <div className="ratio__ red d-flex align-items-center gap-2">
                      <img src={arrow_red} alt="arrow-green" />
                      <span className="percent__">%1,27</span>
                      <span className="number__">11,27</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsSection;
