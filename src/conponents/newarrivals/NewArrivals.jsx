import imgicon from  "../../images/logo/new.png"
import Cart from "./Cart";
const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container mynewarrivase">
            <div className="heading d-flex">
                <div className="heading-left row f-flex">
                    <img src={imgicon} alt="" />
                  <h2>محصولات جدید</h2>
                </div>
                <div className="heading-right row">
                  <span>مشاهده همه</span>
                  <i className="fa fa-caret-left"></i>
                </div>
            </div>
            <Cart/>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
