import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMicrosoft, faSteam}from "@/assets"

export default function header() {
    return (
        <header className=" text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
                Calculadora <br />
                <span className="text-blue-400">AR$</span> en
            </h1>
            <div className="flex flex-col md:flex-row items-center md:items-start mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center">
                    <FontAwesomeIcon className="text-3xl md:text-4xl text-blue-500 mx-2" icon={faMicrosoft} />
                    <h2 className="text-xl md:text-2xl font-semibold">Microsoft</h2>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon className="text-3xl md:text-4xl text-gray-400 mx-2" icon={faSteam} />
                    <h2 className="text-xl md:text-2xl font-semibold">Steam</h2>
                </div>
            </div>
        </div>
    </header>
    )
}