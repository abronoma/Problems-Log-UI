import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__info">
        <h3>Welcome to</h3>
        <h2>
          World <span style={{ color: "orangered" }}>Problems</span> Log
        </h2>
        <p>
          Struggling to share openly? WPL offers a safe, anonyous space to
          express your challenges and find global support. Is this conversation
          helpful so far?
        </p>

        <div className="banner__cta">
          <Link to={"/yourBurden"}>
          <button className="banner__cta-1">Share your burden</button>
          </Link>

          <Link to={"/burdens"}>
            <button className="banner__cta-2">
              See all burdens{" "}
              <span className="material-icons-sharp">arrow_right_alt</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
