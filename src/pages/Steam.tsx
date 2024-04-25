import {ChangeEvent, useState} from "react";
import {faSteam} from "../components/icons.ts"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ErrorComp, ResultComp} from "../components/Comps.tsx";

function Steam() {
    const [valorInput, setValorInput] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);
    const [error, setError] = useState<string>('')

    const handImput = (event: ChangeEvent<HTMLInputElement>) => {
        setValorInput(event.target.value);
    }

    let num: number = 1465.92;

    const ecuation = () => {
        const values: number = parseFloat(valorInput);

        if (isNaN(values)) {
            setError("NULL ERROR")
            setValorInput('')
            setTimeout(() => setError(''), 1000);
            setResultado(null);
            return;
        }

        const result: number = values * num;
        const resultadoRound: number = Math.round(result * 100) / 100;
        const resultFormat: string = resultadoRound.toLocaleString('es-AR', {minimumFractionDigits: 2});
        setResultado(parseFloat(resultFormat));
    }

    return (
        <>
            <section className="h-screen flex justify-center items-center">
                <div className=" flex flex-col justify-center items-center border border-slate-400 p-10 rounded-xl">
                    <div className="flex flex-col justify-center items-center">
                        <FontAwesomeIcon className="text-30" icon={faSteam} color="gray"/>
                        <h1 className="text-xl m-2">Steam</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <input className=" text-center rounded-xl border border-slate-400 p-2" type="text"
                               placeholder="$0.00" value={valorInput} onChange={handImput}/>
                        <button
                            className="hover:bg-slate-200 hover:text-slate-800 py-1 px-2 border m-2 border-slate-400 rounded-xl"
                            onClick={ecuation}>Enviar
                        </button>
                    </div>
                    {resultado !== null && <ResultComp value="60" result={resultado}/>}
                    {error !== '' && <ErrorComp/>}
                </div>
            </section>
        </>
    );
}

export default Steam;
