import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSteam, faMicrosoft} from "./icons.ts"

export const HomeComp = () => {
    return (
        <div className="border border-slate-400 rounded-2xl my-2 p-2">
            <ul className="flex flex-col justify-center items-center p-3">
                <ListHm logo={faSteam} hrf={"https://www.youtube.com/"} title="Steam"/>
                <ListHm logo={faMicrosoft} hrf={"https://www.youtube.com/"} title="Microsft"/>
            </ul>
        </div>
    )
}

interface ListProps {
    title: string;
    hrf: string;
    logo: string;
}

export const ListHm: React.FC<ListProps> = ({title, hrf, logo}) => {
    return (
        <Link to={hrf} className="flex flex-row justify-start items-center hover:bg-white hover:text-slate-800 p-2 my-1 rounded-2xl border border-slate-600 w-200">
            <FontAwesomeIcon icon={logo}/>
            <p className="mx-2">{title}</p>
        </Link>
    )
}