import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* <button onClick={onSignOutClick} className="sign-out-button">
        Sign Out
      </button> */}
      <ul className="nav-links">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
  );
}

export default Navbar;