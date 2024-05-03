import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdverHome, HomeComp } from "../components/Comps.tsx";
import { faMicrosoft, faSteam } from "../components/icons.ts";
import { useState } from "react";

function Home() {
    const [abrirCard, setAbrirCard] = useState<boolean>(false);
    const abrirMenu = () => {
        setAbrirCard(!abrirCard);
    }
    const closeMenu = () => { setAbrirCard(false) }
    return (
        <>
            <section className="flex flex-col  justify-center items-center w-full h-screen">
                <div className="my-4 flex flex-col justify-center items-center">
                    <h1 className="my-3 text-xl">Calculadora <span className="text-blue-400">AR$</span> en</h1>
                    <div className="flex flex-row text-4xl">
                        <div className="flex flex-row items-center">
                            <FontAwesomeIcon className="mx-2" icon={faMicrosoft} />
                            <h2 className="border-r pr-3">Microsoft</h2>
                        </div>
                        <div className="flex flex-row items-center">
                            <FontAwesomeIcon className="pl-1 mx-2" icon={faSteam} />
                            <h2>Steam</h2>
                        </div>

                    </div>
                </div>
                <h1 className="text-2xl ">Elige tu plataforma</h1>
                <HomeComp />
                <button className={`${abrirCard ? 'hidden' : ''}`} onClick={abrirMenu}>Leer Antes</button>
                {abrirCard && <AdverHome onClick={closeMenu} />}
            </section>
        </>
    )

}

export default Home;