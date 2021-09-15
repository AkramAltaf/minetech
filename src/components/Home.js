import Teams from "./Teams";
import UserList from "./UserList";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <Teams />
        <UserList />
      </div>
    </div>
  );
};

export default Home;
