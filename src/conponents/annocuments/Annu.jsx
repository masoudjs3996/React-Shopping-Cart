import img1 from "../../images/banner-1.png";
import img2 from "../../images/banner-2.png";

const Annu = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className="annouc background">
        <div className="container d-flex">
          <div className="img" style={mystyle}>
            <img src={img1} alt="" width="100%" height="100%" />
          </div>
          <div className="img" style={mystyle1}>
            <img src={img2} alt="" width="100%" height="100%" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annu;
