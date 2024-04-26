import {Link} from "react-router-dom";
import {ListF} from "./Comps";
import {faGithubAlt, faLinkedin} from "./icons.ts";

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center">
            <div className="max-w-100 grid grid-cols-2 gap-1 justify-center items-center my-2">
                <div className="flex justify-center items-center">
                    <Link to="https://systemarzz.netlify.app/">
                        <img className="ns:h-40 h-60" src="https://imgbb.host/images/3LXuW.png" alt=""/>
                    </Link>
                </div>
                <div className="flex flex-row justify-center border-l mx-2 border-slate-400 items-center">
                    <ListF hrf="https://github.com/DMarzzucco/Inpuesto-Dolar-Steam-Microsft.git" icon={faGithubAlt}/>
                    <ListF hrf="https://www.linkedin.com/in/dario-marzzucco-597090283/" icon={faLinkedin}/>
                </div>
            </div>
            <div className="flex my-px py-1 ns:text-12 ns:justify-center bg-bgk w-full text-slate-400">
                <p className="footer:text-10">
                    &copy; 2024
                </p>
                <span className="mx-1 font-mono footer:text-10 text-slate-300">SysteMarzz</span>
                <p className="footer:text-10">
                    All rights reserved Made by Dario Marzzucco
                </p>

            </div>
        </footer>
    )
}

export default Footer;