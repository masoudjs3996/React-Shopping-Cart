import "./Cart.css"
const Cart = ({ addToCart, cartItem, decreaseQty }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <section className="cart-items">
        <div className="container d-flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items products">هیچ موردی به سبد خرید اضافه نشده</h1>
            )}
            {cartItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list products d-flex ">
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button>
                        <i className="fa -solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d-flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
            <div className="cart-total products total"style={{direction:"rtl"} }>
              <h2>جمع سبد خرید</h2>
              <div className="d-flex">
                <h4 style={{color:"red", fontSize:"17px"}}>جمع قیمت:</h4>
                <h4 style={{color:"red", fontSize:"17px"}}>{totalPrice}.000</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
