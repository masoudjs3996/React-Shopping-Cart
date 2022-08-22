import Ddata from "./Ddata";
import Slider from "react-slick";
const Discard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    margin: 200,
  };
  return (
    <>
      <div className="content">
        <Slider {...settings}>
          {Ddata.map((value, index) => {
            return (
              <>
                <div className="products" key={index}>
                  <div className="box">
                    <div className="img">
                      <img src={value.cover} alt="" width="100%" />
                    </div>
                    <h4>{value.name}</h4>
                    <span>{value.price}</span>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Discard;
