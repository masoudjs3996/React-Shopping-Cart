import Catg from "./Catg";
import ShopCart from "./shopCart";
import "./shop.css"
const Shop = ({addToCart,shopItems}) => {
  return (
    <>
      <section className="shop background">
        <div className="container d-flex">
          <Catg />
          <div className="contentWidth myshopping">
            <div className="heading d-flex">
              <div className="heading-left row f-flex">
                <h2>تلفن های همراه</h2>
              </div>
              {/* <div className="heading-right row">
                <span>مشاهده همه</span>
                <i className="fa fa-caret-left"></i>
              </div> */}
            </div>
            <div className="product-content grid1">
              <ShopCart shopItems={shopItems} addToCart={addToCart}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
