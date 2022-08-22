import Annu from "../conponents/annocuments/Annu";
import Discount from "../conponents/discount/DisCount";
import FlashDeals from "../conponents/flashDeals/FlashDeals";
import Home from "../conponents/mainpage/Home";
import NewArrivals from "../conponents/newarrivals/NewArrivals";
import Shop from "../conponents/shop/shop";
import TopCate from "../conponents/top/TopCate";
import Wrapper from "../conponents/wrapper/wrapper";

const Pages = ({ productItems, cartItem, addToCart,shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCate/>
      <NewArrivals/>
      <Discount/>
      <Shop shopItems={shopItems} addToCart={addToCart}/>
      <Annu/>
      <Wrapper/>
    </>
  );
};

export default Pages;
