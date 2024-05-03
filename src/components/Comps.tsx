import React, { MouseEventHandler } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam, faMicrosoft, faCircleXmark } from "./icons.ts"
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

//advertencia
interface AdvertProps {
    title: string;
    text: string;
}

export const Advert: React.FC<AdvertProps> = ({ title, text }) => {
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

export const AdverHome: React.FC<Props> = ({ onClick }) => {
    return (
        <div className='absolute w-auto border border-red-400 bg-red-900 p-3 rounded-xl flex flex-col items-end '>
            <button className='' onClick={onClick}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold p-1 text-xl my-3'>IMPORTANTE</h1>
                <p className='text-center'>
                    Los resultados obtenidos, son un aproximado cercano que se puede obtener. <br /> El total real
                    dependerá en sí de los impuestos implementados por el banco que se use.
                </p>
                <span className='font-bold my-3 text-center'>
                    Última Actualización <br /> 25-04-2022
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
    result: number;
    child: JSX.Element;
}

export const ResultComp: React.FC<ResultProps> = ({ result, child }) => {
    return (
        <div className="border border-slate-400 bg-slate-700 rounded-2xl my-2 p-2">
            <div className='flex flex-col my-2 p-1'>
                <h3 className='text-slate-300 font-semibold'>Total de impuestos nacionales y provinciales:</h3>
                <p className='text-20 font-bold'>60,00%</p>
            </div>
            <div className='flex flex-col border-b my-2 p-1'>
                {child}
            </div>
            <div>
                <h2 className='font-bold'>TOTAL APROXIMADO: </h2>
                <h1 className='font-bold text-20'>{result}AR$</h1>
            </div>
        </div>
    )
}
// MenuNav
/*interface BtProp {
    onClick: MouseEventHandler<HTMLButtonElement>;
}*/

export const Menunav = () => {
    return (
        <div className='flex flex-col justify-start items-start'>
            {/*<button onClick={onClick} className='w-200 flex justify-end my-2'>
                <FontAwesomeIcon icon={faCircleXmark} className='text-white text-30 hover:text-red-700' />
            </button>*/}
            <LinkNav logo={faSteam} title='Steam' path={'/Steam'} />
            <LinkNav logo={faMicrosoft} title='Microsoft' path={'/Microsoft'} />
        </div>
    )
}

interface MenuProps {
    title: string;
    path: string;
    logo: IconDefinition;
}

export const LinkNav: React.FC<MenuProps> = ({ path, title, logo }) => {
    return (
        <Link to={path} className=' w-200 flex flex-row justify-start items-center p-2 border rounded-xl my-1 hover:bg-slate-300 hover:text-slate-900'>
            <FontAwesomeIcon icon={logo} />
            <p className='mx-2'>{title}</p>
        </Link>
    )
}
