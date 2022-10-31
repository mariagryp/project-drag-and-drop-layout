import "../App.css";


const logo = require("./logo_2.png");

function Header() {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
}

export default Header;
