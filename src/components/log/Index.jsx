

const LogBurden = ({index, message}) => {
  return (
    <>
      <div className="burden__sender">
            <div className="burden__profile">S01</div>
            <div>
              <h3>Sender {index}</h3>
              <div className="burden__detail">
                <p>
                  {message}
                </p>

              </div>
            </div>
          <button>View</button>
          </div>
    </>
  );
}

export default LogBurden;
