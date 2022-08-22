import "./footer.css";
import img from "../../images/logo/Capture.PNG";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            {/* <h1>Bonik</h1> */}
            <img
              src={img}
              alt=""
              style={{ width: "50px", height: "50px", borderRadius: "40%",marginLeft:"300px" }}
            />
            <p style={{ margin: "10px 0 0 0", direction: "rtl" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
            <div className="icon d-flex" style={{ margin: "10px 0 0 0" }}>
              <div className="img d-flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d-flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>
          <div className="box" style={{ direction: "rtl" }}>
            <h2>درباره ما</h2>
            <ul>
              <li>مشاغل</li>
              <li>فروشگاه های ما</li>
              <li>مراقبت های ما</li>
              <li>شرایط و ضوابط</li>
              <li>سیاست حفظ حریم خصوصی</li>
            </ul>
          </div>
          <div className="box" style={{direction:"rtl"}}>
            <h2>مراقبت از مشتری</h2>
            <ul>
              <li>مرکز کمک</li>
              <li>چگونه خرید کنیم</li>
              <li>سفارشتان را پیگیری کنید</li>
              <li>خرید شرکتی و عمده</li>
              <li>بازگشت و بازپرداخت</li>
            </ul>
          </div>
          <div className="box" style={{direction:"rtl"}}>
            <h2>با ما تماس بگیری</h2>
            <ul>
              <li>
                ایران-ایلام-میدان 22 بهمن-پلاک 43
              </li>
              <li>ایمیل: masoudjsdeveloper@gmail.com</li>
              <li>تلفن: 0843 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
