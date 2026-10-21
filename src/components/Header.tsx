import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="navbar">
        <div className="navbar-container flex items-center justify-between ">
            <div className="nav-logo">
                <a href=""><img src={logo} alt="FitZone_logo" width="200px"/></a>
            </div>
            <div className="join-now">
                <button className="joinnow-btn">Join Now</button>
            </div>
        </div>
    </nav>
  )
}

export default Header;