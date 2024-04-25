import React, {MouseEventHandler} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSteam, faMicrosoft, faCircleXmark} from "./icons.ts"
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

export const HomeComp = () => {
    return (
        <div className="border border-slate-400 rounded-2xl my-2 p-2">
            <ul className="flex flex-col justify-center items-center p-3">
                <ListHm color='gray' logo={faSteam} hrf={"/steam"} title="Steam"/>
                <ListHm color='skyblue' logo={faMicrosoft} hrf={"/microsoft"} title="Microsft"/>
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

export const ListHm: React.FC<ListProps> = ({title, hrf, logo, color}) => {
    return (
        <Link to={hrf}
              className="flex flex-row justify-start items-center hover:bg-white hover:text-slate-800 p-2 my-1 rounded-2xl border border-slate-600 w-200">
            <FontAwesomeIcon icon={logo} color={color}/>
            <p className="mx-2">{title}</p>
        </Link>
    )
}

// comps footer

interface FListProps {
    hrf: string;
    icon: IconDefinition;
}

export const ListF: React.FC<FListProps> = ({hrf, icon}) => {
    return (
        <Link to={hrf} className='m-2'>
            <FontAwesomeIcon className='text-30 text-slate-400' icon={icon}/>
        </Link>
    )
}

//advertencia
interface AdvertProps {
    title: string;
    text: string;
}

export const Advert: React.FC<AdvertProps> = ({title, text}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

// Home 
interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const AdverHome: React.FC<Props> = ({onClick}) => {
    return (
        <div className='absolute w-auto border border-red-400 bg-red-900 p-3 rounded-xl flex flex-col items-end '>
            <button className='' onClick={onClick}>
                <FontAwesomeIcon icon={faCircleXmark}/>
            </button>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold p-1 text-xl my-3'>IMPORTANTE</h1>
                <p className='text-center'>
                    Los resultados obtenidos, son un aproximado cercano que se puede obtener. <br/> El total real
                    dependerá en sí de los impuestos implementados por el banco que se use.
                </p>
                <span className='font-bold my-3 text-center'>
                    Última Actualización <br/> 25-04-2022
                </span>
            </div>
        </div>
    )
}

// error

export const ErrorComp = () => {
    return (
        <div className="border border-red-300 bg-red-900 rounded-2xl my-2 p-2">
            <h1 className="text-center text-slate-300">Ingrese un valor correcto</h1>
        </div>
    )
}

// resultado
interface ResultProps {
    value: string;
    result: number;
}

export const ResultComp: React.FC<ResultProps> = ({value, result}) => {
    return (
        <div className="border border-slate-400 bg-yellow-700 rounded-2xl my-2 p-2">
            <ul className='flex flex-col justify-center items-center border-b my-2 p-1'>
                <li>Impuesto tal{value}</li>
                <li>Impuesto secundario</li>
            </ul>
            <h2 className='font-bold'>TOTAL APROXIMADO:{result} $</h2>
        </div>
    )
}
