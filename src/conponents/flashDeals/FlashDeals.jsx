import FlashCard from "./FlasCard";

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash background">
        <div className="container deails">
          <div className="heading f-flex">
            <i className="fa fa-bolt"></i>
            <h1>معاملات</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
