import { useState } from "react";
import Modal from "../../components/Modal";
import "./yourBurden.css";
import "../../components/BurdenList/list.css";
import { addBurden } from "../../queries/queries";

const ShareBurden = () => {
  const [emailInput, setEmailInput] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleCheckboxChange = () => {
    setEmailInput(!emailInput); 
  };

  const handleSendClick = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const message = formData.get("message");
    const email = formData.get("email");

    await addBurden({message, email});
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="background">
      <div className="content">
        <form onSubmit={handleSendClick}>
        <div className="yourBurden_details">
          <div className="burden_info">
            <h1>What is your burden ?</h1>
            <p>Send us an anonymous message and get a solution to your problem.</p>
          </div>

          <div className="header__action">
            <div className="header__search">
              <input type="text" name="message" placeholder="Enter burden here..." />
            </div>
          </div>

          <div className="header__action">
            <label className="send-response-checkbox">
              <input
                type="checkbox"
                onChange={handleCheckboxChange} 
              />
              <span>Receive response</span>
            </label>
          </div>

          {emailInput && (
            <div className="header__action">
              <div className="header__search">
                <input type="email" name="email" placeholder="Enter email here" />
              </div>
            </div>
          )}

        </div>
        <div className="centered">
          <button type="submit" className="send">Send</button>
        </div>
        </form>
      </div>

      {/* Modal component */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default ShareBurden;
