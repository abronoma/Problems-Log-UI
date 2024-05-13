import logo from "/logo.jpg";
import '@fortawesome/fontawesome-free/css/all.css'; 
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <p> World Problems Log</p>
      </div>

      <p className="copyright">Copyright &copy; 2024 WorldProblemLogLLc.</p>

      <div className="footer__icons">
  <i className="fab fa-twitter footer__icon"></i>
  <i className="fab fa-linkedin footer__icon"></i>
  <i className="fab fa-youtube footer__icon"></i>
  <i className="fab fa-instagram footer__icon"></i>
  <i className="fab fa-tiktok footer__icon"></i>
</div>

    </div>
  );
};

export default Footer;
