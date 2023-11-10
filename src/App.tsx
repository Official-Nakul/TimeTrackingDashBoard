import "./App.css";
import TaskCard from "./component/TaskCard/TaskCard";
import userpfp from "./assets/images/image-jeremy.png";
function App() {
  return (
    <>
      <div className="container">
        <div className="details">
          <div className="userDetailsContainer">
            <div className="pfp">
              <img src={userpfp} alt="" />
            </div>
            <div className="data">
              <p className="report">Report for</p>
              <p className="name">
                Jeremy <br /> Robson
              </p>
            </div>
          </div>
          <div className="timeline">
            <p className="dialy">Daily</p>
            <p className="weekly">Weekly</p>
            <p className="montly">monthly</p>
          </div>
        </div>

        <TaskCard />
      </div>
    </>
  );
}

export default App;
