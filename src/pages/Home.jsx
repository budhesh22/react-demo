import "../assets/scss/components/home.scss";
import DemoList from "../components/demo/DemoList";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <DemoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
