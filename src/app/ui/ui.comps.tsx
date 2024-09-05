"use client";
import { ecuationProp, ListProps, TemplateProp } from "@/ts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faSteam, faMicrosoft, faCircleXmark } from "@/assets"
import React from "react";
import { Steam } from "./steam";
import { Microsoft } from "./microsoft";
import { useLocalContext } from "../context/LocalContext";


export const HomeComponent: React.FC = () => {
    const { ...pre } = useLocalContext()
    return (
        <div className="flex flex-col justify-center items-center border border-slate-400 rounded-2xl my-2 px-2 py-4 " >
            <h1 className="text-2xl font-semibold ">Elige tu Plataforma</h1>
            <ul className="flex flex-col justify-center items-center p-3">
                <ListHm color='gray' logo={faSteam} click={() => { pre.ButtonBoolean({ type: "openSteam" }) }} title="Steam" />
                <ListHm color='skyblue' logo={faMicrosoft} click={() => { pre.ButtonBoolean({ type: "openMicrosoft" }) }} title="Microsoft" />
            </ul>
            {pre.booleanState.steam && <Steam />}
            {pre.booleanState.microsoft && <Microsoft />}
        </div>
    )
}
HomeComponent.displayName = "HomeComponent";

export const ListHm: React.FC<ListProps> = ({ ...pre }) => {
    return (
        <button onClick={pre.click}
            className="flex flex-row justify-start items-center hover:bg-white hover:text-slate-800 p-2 my-1 rounded-2xl border border-slate-600 md:w-300 w-200">
            <FontAwesomeIcon icon={pre.logo} color={pre.color} />
            <p className="mx-2">{pre.title}</p>
        </button>
    )
}
ListHm.displayName = "ListHm";

export const AdverHome: React.FC = () => {
    const { ButtonBoolean } = useLocalContext()
    return (
        <div className='absolute w-auto border border-red-400 bg-red-900 p-3 rounded-xl flex flex-col items-end '>
            <button className='' onClick={() => { ButtonBoolean({ type: "closeCard" }) }}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold p-1 text-xl my-3'>IMPORTANTE</h1>
                <p className='text-center'>
                    Los resultados obtenidos, son un aproximado cercano que se puede obtener. <br /> El total real
                    dependerá en sí de los impuestos implementados por el banco que se use.
                </p>
                <span className='font-bold my-3 text-center'>
                    Última Actualización <br /> {new Date().toLocaleDateString()}
                </span>
            </div>
        </div>
    )
}
AdverHome.displayName = "AdverHome";

export const ResultComp: React.FC<{ State: ecuationProp }> = ({ State }) => {
    const { resultado } = useLocalContext()
    return (
        <div className="border border-slate-400 bg-slate-700 rounded-2xl my-2 p-2">
            <div className='flex flex-col my-2 p-1'>
                <h3 className='text-slate-300 font-semibold'>Total de impuestos nacionales y provinciales:</h3>
                <p className='text-20 font-bold'>60,00%</p>
            </div>
            <div className='flex flex-col border-b my-2 p-1'>
                <h1 className="text-xl m-2 font-semibold">Coste del dolar Tarjeta:</h1>
                <div>
                    <div className="font-bold">
                        <span>1.00 U$D =</span>
                        <span>{State.factor} AR$</span>
                    </div>
                    <p className="font-semibold text-slate-300">
                        Valor de dolar oficial mas impuestos.
                    </p>
                    <p className="text-13 text-slate-400 font-semibold">
                        Update: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
            <div>
                <h2 className='font-bold'>TOTAL APROXIMADO: </h2>
                <h1 className='font-bold text-20'>{resultado} AR$</h1>
            </div>
        </div>
    )
}
ResultComp.displayName = "ResultComp";

export const ErrorComp: React.FC = () => {
    return (
        <div className="border border-red-300 bg-red-900 rounded-2xl my-2 p-2">
            <h1 className="text-center text-slate-300">Ingrese un valor correcto</h1>
        </div>
    )
}
ErrorComp.displayName = "ErrorComp";

export const OpTemplate: React.FC<TemplateProp> = React.memo(({ ...pre }) => {
    const { takeInput, booleanState } = useLocalContext()
    return (
        <div className=" flex flex-col justify-center items-center border border-slate-400 p-10 rounded-xl">
            <button onClick={pre.click} className="w-full flex -mt-2">
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon className="text-30" icon={pre.icon} color={pre.color} />
                <h1 className="text-xl m-2">{pre.Name}</h1>
            </div>
            <form onSubmit={pre.onSubmit} className="flex flex-col justify-center items-center">
                <input
                    type="text"
                    placeholder="$0.00"
                    value={pre.value}
                    onChange={takeInput}
                    name={pre.nameInput}
                />
                <button className="hover:bg-slate-200 hover:text-slate-800 py-1 px-2 border m-2 border-slate-400 rounded-xl" type="submit">
                    Enviar
                </button>
            </form>
            {pre.result !== null && <ResultComp State={pre.factor} />}
            {booleanState.error && <ErrorComp />}
        </div>
    )
})
OpTemplate.displayName = "OpTemplate";
