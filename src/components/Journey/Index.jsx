import "./journey.css";

const Journey = () => {
  return (
    <div className="journey">
      <div className="journey__info">
        <h3>Start your journey.</h3>
        <p>
          WPL understands that not everyone feels comfortable sharing their
          struggles openly. Our platform offers a judgent-free zone.
        </p>
      </div>

      <div className="journey__about">
        
        <div className="journey__about-tip">
        <img src="/assets/Vector.svg" alt="" width={33} />


          <h4>Anonymous Posting</h4>
          <p>
            Share your problems without revealing your identity. Your privacy is
            our top priority
          </p>
        </div>

        <div className="journey__about-tip">
        <img src="/assets/Vector (1).svg" alt="" width={33}/>
          <h4>Global Community Support</h4>
          <p>
            Share your problems without revealing your identity. Your privacy is
            our top priority
          </p>
        </div>

        <div className="journey__about-tip">
        <img src="/assets/Vector (2).svg" alt="" width={33}  />
          <h4>Anonymous Posting</h4>
          <p>
            Share your problems without revealing your identity. Your privacy is
            our top priority
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;
