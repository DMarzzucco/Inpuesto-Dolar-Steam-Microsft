import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    // const MenuRef= useRef (null)
    const DesplegarMenu = () => { setOpenMenu(!openMenu) };
    const CloseMenu = () => { setOpenMenu(false) };
    return (
        <header className="flex flex-row justify-between items-center w-full">
            <h1>Header</h1>
            <button onClick={DesplegarMenu}>menu</button>
            {/*  */}
            {openMenu && <div className="menu" onClick={CloseMenu}>
                <Link to="/">Home</Link>
            </div>}
        </header>
    )

}
export default Header;