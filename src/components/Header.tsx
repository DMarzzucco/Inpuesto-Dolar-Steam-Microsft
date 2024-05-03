import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faChevronLeft, faBarsStaggered } from "./icons"
import { Menunav } from "./Comps";

function Header() {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const desplegarMenu = () => {
        setOpenMenu(prevState => !prevState)
    };
    const closeMenu = () => {
        setOpenMenu(false)
        return
    };
    return (
        <>
            <header className={`flex px-2 my-2 flex-col justify-center items-center w-full ${openMenu ? 'hidden' : ''}`}>
                <div className="flex px-3 flex-row text-20 justify-between items-center w-full">
                    <Link to="/" className="cursor-pointer">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                    <button className="cursor-pointer" onClick={desplegarMenu}>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </button>
                </div>
                {/*  */}
            </header>
            {openMenu &&
                <section onClick={closeMenu} className='fixed h-screen w-full bg-black bg-opacity-70 flex flex-col justify-center items-center'>
                    <Menunav />
                </section>
            }

        </>
    )

}

export default Header;
