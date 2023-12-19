import "./NavBar.css"
import logo from "../../assets/logo.png"
import facebook from "../../assets/link-facebook.png"
import google from "../../assets/link-google.png"
import twitter from "../../assets/link-twitter.png"
import instagram from "../../assets/link-instagram.png"

const NavBar = () => {
    return ( 
        <header className="navBar">
            <nav>
            <img src={logo} alt="" />
            <div className="linksBar">
                <a href="" className="links"> <img src={google} alt="" /></a>
                <a href="" className="links"><img src={facebook} alt="" /></a>
                <a href="" className="links"><img src={twitter} alt="" /></a>
                <a href="" className="links"><img src={instagram} alt="" /></a>
            </div>
            </nav>
        </header>
     );
}
 
export default NavBar;