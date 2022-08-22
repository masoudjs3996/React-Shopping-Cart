import Categories from "./Categories";
import "./Home.css"
import Slider from "./Slider.jsx";


const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d-flex">
          <Categories />
          <Slider/>
        </div>
      </section>
    </>
  );
};

export default Home;
