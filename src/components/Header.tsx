import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {Link} from "react-router-dom";
import {faChevronLeft, faBarsStaggered} from "./icons"

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    // const MenuRef= useRef (null)
    const DesplegarMenu = () => {
        setOpenMenu(!openMenu)
    };
    const CloseMenu = () => {
        setOpenMenu(false)
    };
    return (
        <header className="flex px-2 flex-row justify-between items-center w-full">
            <Link to="/">
                <FontAwesomeIcon icon={faChevronLeft}/>
            </Link>
            <button onClick={DesplegarMenu}>
                <FontAwesomeIcon icon={faBarsStaggered}/>
            </button>
            {/*  */}
            {openMenu && <div className="menu" onClick={CloseMenu}>
                <Link to="/">Home</Link>
            </div>}
        </header>
    )

}

export default Header;