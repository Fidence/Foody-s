import Home2 from "../HomeComp/Home2";
import HomeComp from "../HomeComp/HompComp";
import { imgVes } from "../HomeComp/ImgVegs";

const HomePage = () => {
  return (
    <div className="home__container">
      <HomeComp slides={imgVes} />
      <Home2 />
    </div>
  );
};

export default HomePage;
