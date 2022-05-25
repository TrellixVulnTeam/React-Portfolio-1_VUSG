import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            maruf.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>
              <a className="telephone__" href="tel:+2349021816584">
                +234 90 218 165 84
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a className="mail__" href="mailto:marufatoyebi410@gmail.com">
                Maruf Atoyebi
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
