import img1 from "../../images/category/download.png";
import img2 from "../../images/category/brand1.png";
import img3 from "../../images/category/oppo1.png";
import img4 from "../../images/category/vivo.png";
import img5 from "../../images/category/redmin.png";
import img6 from "../../images/category/sony.png";




// import img2 from "../../images/category/cat-2.png";

const Catg = () => {
  const data = [
    {
      cateImg: img1,
      cateName: "Apple",
    },
    {
      cateImg: img2,
      cateName: "Samasung",
    },
    {
      cateImg: img3,
      cateName: "Oppo",
    },
    {
      cateImg: img4,
      cateName: "Vivo",
    },
    {
      cateImg: img5,
      cateName: "Redimi",
    },
    {
      cateImg: img6,
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="brands category">
        <div className="chead d-flex">
          <h1>برند ها</h1>
          <h1>فروشگاه</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f-flex" key={index}>
              <img src={value.cateImg} alt="" style={{width:"50px" , height:"50px" , margin:"-5px 0 0 0"}}/>
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>مشاهده همه برند ها</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
