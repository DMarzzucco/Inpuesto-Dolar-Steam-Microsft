import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMicrosoft, faSteam}from "@/assets"

export default function header() {
    return (
        <header>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-center w-full">
                <h1 className="my-3 md:text-6xl text-5xl font-bold">Calculadora <br /> <span className="text-blue-400">AR$</span> en</h1>
                <div className="flex flex-row text-2xl md:text-4xl">
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
        </header>
    )
}