import {ChangeEvent, useState} from "react";
import {faMicrosoft} from "../components/icons.ts"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ErrorComp, ResultComp} from "../components/Comps.tsx";

function Microsft() {
    const [valorInput, setValorInput] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);
    const [error, setError] = useState<string>('');

    const takeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValorInput(e.target.value);
    }
    // valor a sumar
    let num: number = 1.60;

    const ecuation = () => {
        const value: number = parseFloat(valorInput);

        if (isNaN(value)) {
            setError('Ingrese un valor valido');
            setValorInput('');
            setTimeout(() => setError(''), 1000)
            setResultado(null);
            return;
        }

        const result: number = value * num;
        const resultFormat: string = result.toLocaleString('es-AR', {minimumFractionDigits: 4});
        setResultado(parseFloat(resultFormat));
    }
    return (
        <>
            <section className="flex flex-col w-full h-screen justify-center items-center">
                <div className=" flex flex-col justify-center items-center border border-slate-400 p-10 rounded-xl">
                    <div className="flex flex-col justify-center items-center">
                        <FontAwesomeIcon className="text-30" icon={faMicrosoft} color="skyBlue"/>
                        <h1 className="text-xl m-2">Steam</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <input className=" text-center rounded-xl border border-slate-400 p-2" type="text"
                               placeholder="$0.00" value={valorInput} onChange={takeInput}/>
                        <button
                            className="hover:bg-slate-200 hover:text-slate-800 py-1 px-2 border m-2 border-slate-400 rounded-xl"
                            onClick={ecuation}>Enviar
                        </button>
                    </div>
                    {/* Result Template */}
                    {resultado !== null && <ResultComp value="60" result={resultado}/>}
                    {error !== '' && <ErrorComp/>}
                </div>
            </section>
        </>
    )

}

export default Microsft;
