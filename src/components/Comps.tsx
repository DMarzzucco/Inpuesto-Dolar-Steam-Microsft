import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam, faMicrosoft } from "./icons.ts"
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const HomeComp = () => {
    return (
        <div className="border border-slate-400 rounded-2xl my-2 p-2">
            <ul className="flex flex-col justify-center items-center p-3">
                <ListHm color='gray' logo={faSteam} hrf={"/steam"} title="Steam" />
                <ListHm color='skyblue' logo={faMicrosoft} hrf={"/microsoft"} title="Microsft" />
            </ul>
        </div>
    )
}

interface ListProps {
    title: string;
    hrf: string;
    logo: IconDefinition;
    color: string;
}

export const ListHm: React.FC<ListProps> = ({ title, hrf, logo, color }) => {
    return (
        <Link to={hrf}
            className="flex flex-row justify-start items-center hover:bg-white hover:text-slate-800 p-2 my-1 rounded-2xl border border-slate-600 w-200">
            <FontAwesomeIcon icon={logo} color={color} />
            <p className="mx-2">{title}</p>
        </Link>
    )
}

// comps footer

interface FListProps {
    hrf: string;
    icon: IconDefinition;
}

export const ListF: React.FC<FListProps> = ({ hrf, icon }) => {
    return (
        <Link to={hrf} className='m-2'>
            <FontAwesomeIcon className='text-30 text-slate-400' icon={icon} />
        </Link>
    )
}

// prueba

