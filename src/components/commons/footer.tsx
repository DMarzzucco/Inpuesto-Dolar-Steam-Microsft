import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@/assets"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center">
            <div className="text-xl flex flex-col justify-center items-center">
                <Link href={"https://github.com/DMarzzucco/Inpuesto-Dolar-Steam-Microsft.git"} className="text-6xl hover:text-slate-500">
                    <FontAwesomeIcon icon={faGithubAlt} />
                </Link>
                <h2 className="font-mono">Repo Github</h2>
            </div>
            <div className="flex my-px py-1 justify-center items-center bg-bgk w-full text-slate-400 text-xs text-center">
                <p className="">
                    &copy; 2024 <span className="mx-1 font-bold footer:text-10 text-slate-300">SysteMarzz</span>All rights reserved Made by Dario Marzzucco
                </p>
            </div>
        </footer>
    )
}