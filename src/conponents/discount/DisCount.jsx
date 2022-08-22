import imgicon from "../../images/logo/gift.png"
import Discard from "./Discard";
const Discount = () => {
  return (
    <>
      <section className="discunt background newarrivals">
        <div className="container mynewarrivase">
          <div className="heading d-flex">
            <div className="heading-left row f-flex">
              <img src={imgicon} alt="" />
              <h2>تخفیف فوق العاده</h2>
            </div>
            <div className="heading-right row">
              <span>مشاهده همه</span>
              <i className="fa fa-caret-left"></i>
            </div>
          </div>
          <Discard/>
        </div>
      </section>
    </>
  );
};

export default Discount;
