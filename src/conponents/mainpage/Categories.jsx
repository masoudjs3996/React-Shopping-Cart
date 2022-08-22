import img1 from "././../../images/category/cat1.png";
import img2 from "././../../images/category/cat2.png";
import img3 from "././../../images/category/cat3.png";
import img4 from "././../../images/category/cat4.png";
import img5 from "././../../images/category/cat5.png";
import img6 from "././../../images/category/cat6.png";
import img7 from "././../../images/category/cat7.png";
import img8 from "././../../images/category/cat8.png";
import img9 from "././../../images/category/cat9.png";
import img10 from "././../../images/category/cat10.png";
import img11 from "././../../images/category/cat11.png";

const Categories = () => {
  const data = [
    {
      cateImg: img1,
      cateName: "مد",
    },
    {
        cateImg: img2,
        cateName: "الکترونیکی",
      },
      {
        cateImg: img3,
        cateName: "ماشین",
      },
      {
        cateImg: img4,
        cateName: "خانه و باغ",
      },
      {
        cateImg: img5,
        cateName: "هدیه",
      },
      {
        cateImg: img6,
        cateName: "موسیقی",
      },
      {
        cateImg: img7,
        cateName: "سلامتی و زیبایی",
      },
      {
        cateImg: img8,
        cateName: "حیوانات خانگی",
      },
      {
        cateImg: img9,
        cateName: "اسباب بازی",
      },
      {
        cateImg: img10,
        cateName: "مواد غذایی",
      },
      {
        cateImg: img11,
        cateName: "کتاب ها",
      },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f-flex" key={index}>
              <img src={value.cateImg} alt="hello" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
