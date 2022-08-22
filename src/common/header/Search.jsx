import { Link } from "react-router-dom";
import logo from "../../images/logo/Capture.PNG";
const Search = ({ cartItem }) => {
  window.addEventListener("scroll", function () {
    const search = this.document.querySelector(".search");
    search.classList.toggle("active", window.scrolly > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c-flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>
          <div className="search-box f-flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="جستجو کنید..." />
            <span>همه دسته بندی ها</span>
          </div>
          <div className="icon f-flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag  icon-circle"></i>
                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
