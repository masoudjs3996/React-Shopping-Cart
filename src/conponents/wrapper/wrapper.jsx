import "./wrapper.css";
const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "تحویل در سراسر جهان",
      decs: "ما قیمت های رقابتی را برای محصولات 100 میلیونی خود در هر محدوده ای ارائه می دهیم.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "پرداخت امن",
      decs: "ما قیمت های رقابتی را برای محصولات 100 میلیونی خود در هر محدوده ای ارائه می دهیم.",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "با اطمینان خرید کنید ",
      decs: "ما قیمت های رقابتی را برای محصولات 100 میلیونی خود در هر محدوده ای ارائه می دهیم.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "پشتیبانی 24ساعته",
      decs: "ما قیمت های رقابتی را برای محصولات 100 میلیونی خود در هر محدوده ای ارائه می دهیم.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((value, index) => {
            return (
              <>
                <div className="products" key={index}>
                  <div className="img icon-circle">
                    <i>{value.cover}</i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.decs}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
