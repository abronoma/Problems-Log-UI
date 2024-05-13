import { Link } from "react-router-dom";
import "./list.css";

const BurdenList = () => {
  return (
    <div className="burden">
      <div className="burden__info">
        <h1> Trending burdens </h1>
        <p>
          Discover what&apos;s weighing on minds worldide. <br />
          Explore our trending burdens
        </p>
      </div>

      <div className="burdens">
        <div className="burden__sender">
          <div className="burden__profile">S01</div>
          <div>
            <h3>Sender 001</h3>
            <div className="burden__detail">
              <p>
                How do I navigate a toxic friendship without hurting anyone? I
                feel suffocated by societal expectations. How do I break free
                and live authentically?
              </p>

              <button>View</button>
            </div>
          </div>
        </div>

        <div className="burden__sender">
          <div className="burden__profile">S01</div>
          <div>
            <h3>Sender 001</h3>
            <div className="burden__detail">
              <p>
                How do I navigate a toxic friendship without hurting anyone? I
                feel suffocated by societal expectations. How do I break free
                and live authentically?
              </p>

              <button>View</button>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/burdens"}>
        <div className="burden__btn">
          <button className="burden__cta">
            See all burdens{" "}
            <span className="material-icons-sharp">arrow_right_alt</span>
          </button>
        </div>
      </Link>

      <div className="burden__share-main">
        <h2> Why World Problem Log</h2>
        <p>
          {" "}
          WLP understands that not everyone feels comfortable sharing their
          struggles openly. Whether it&apos;s personal issues, relationship
          dilemmas, or professional concerns, our platform offers a
          judgment-free zone where you can speak your mind without fear of
          repercussions
        </p>
        <Link to={"/yourBurden"}>
        <button>Share your burden</button>
        </Link>
      </div>
    </div>
  );
};

export default BurdenList;
