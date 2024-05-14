import "../../components/BurdenList/list.css";
import LogBurden from "../../components/log/Index.jsx";
import { useState, useEffect } from "react";
import { fetchBurdens } from "../../queries/queries.js";
import { Link } from "react-router-dom";

const ListOfBurdens = () => {
  const [burdens, setBurdens] = useState([]);

  useEffect(()=>{
    fetchBurdens().then((burdens) => {
      setBurdens(burdens);
    });
  }, [])

  return (
    <div>
      <div className="burden">
        <div className="burden__info">
          <h1> Shared burdens </h1>
        </div>

        <div className="burdens"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "1rem 10rem",
        }}
        >
          {
            burdens.map((burden, index) => (
              <LogBurden key={burden.id} index={index + 1} message={burden.message} />
            ))
          }
        </div>
        <div className="burden__btn">
          <button className="burden__cta">Load more</button>
        </div>

        <div className="burden__share-main">
          <h2> What is your burden?</h2>
          <p>
            {" "}
            WLP understands that not everyone feels comfortable sharing their
            struggles openly. Whether it&apos;s personal issues, relationship
            dilemmas, or professional concerns, our platform offers a
            judgment-free zone where you can speak your mind without fear of
            repercussions
          </p>
          <Link to={"/yourBurden"}>
            <button className="">
              Share your burden
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListOfBurdens;