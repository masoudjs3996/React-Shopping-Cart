import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MobileMeno, setMobileMeno] = useState(false);
  return (
    <header className="header">
      <div className="container d-flex">
        <div className="catgrories d-flex">
          <span className="fa-solid fa-border-all"></span>
          <h4>
            دسته بندی ها <i className="fa fa-chevron-down"></i>
          </h4>
        </div>
        <div className="navlink">
          <ul
            className={
              MobileMeno ? "nav-links-MobileMeno" : "link f-flex capitalize"
            }
            onClick={() => setMobileMeno(false)}
          >
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/pages">صفحات</Link>
            </li>
            <li>
              <Link to="/user">حساب کاربری</Link>
            </li>
            <li>
              <Link to="/vendor">حساب فروشنده</Link>
            </li>
            <li>
              <Link to="/track">پیگیری سفارش من</Link>
            </li>
            <li>
              <Link to="/contact">تماس</Link>
            </li>
          </ul>
          <button className="toggle" onClick={() => setMobileMeno(!MobileMeno)}>
            {MobileMeno ? (
              <i className="fas fa-times close hom-bth" />
            ) : (
              <i className="fa-solid fa-bars open" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
