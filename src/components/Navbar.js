export default function Navbar() {
  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        F<span>oo</span>diesHub
      </a>
      <div className="nav-links">
        <a href="#!" className="active">
          Home
        </a>
        <a href="#!">Recipies</a>
        <a href="#!">Settings</a>
      </div>
    </div>
  );
}
