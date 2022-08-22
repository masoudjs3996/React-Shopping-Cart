import TopCart from "./TopCart";
import './Top.css'
const TopCate = () => {
  return (
    <>
      <section className="topCat background">
        <div className="container  mymasoud">
          <div className="heading d-flex">
            <div className="heading-left row f-flex">
              <i className="fa fa-border-all"></i>
              <h2>دسته بندی های برتر</h2>
            </div>
            <div className="heading-right row">
              <span>مشاهده همه</span>
              <i className="fa fa-caret-left"></i>
            </div>
          </div>
          <TopCart/>
        </div>
      </section>
    </>
  );
};

export default TopCate;
