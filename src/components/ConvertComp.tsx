import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, ChangeEvent } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Numpros {
    num: number;
    title: string;
    icon: IconDefinition;
    color: string;
}

export const Bas: React.FC<Numpros> = ({ num, title, icon, color }) => {
    const [valorInput, setValorInput] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValorInput(event.target.value);
    }

    const sumarYMostrarResultado = () => {
        const valorNumero: number = parseFloat(valorInput);
        const resultadoSuma: number = valorNumero * num;
        const resultadoRedon: number = Math.round(resultadoSuma * 100) / 100;
        const resultFormat: string = resultadoRedon.toLocaleString('es-AR', { minimumFractionDigits: 2 });
        setResultado(parseFloat(resultFormat));
    }
    return (
        <div className=" flex flex-col justify-center items-center border border-slate-400 p-10 rounded-xl">
            <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon className="text-30" icon={icon} color={color} />
                <h1 className="text-xl m-2">{title}</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <input className=" text-center rounded-xl border border-slate-400 p-2" type="text" placeholder="$0.00" value={valorInput} onChange={handleInputChange} />
                <button className="hover:bg-slate-200 hover:text-slate-800 py-1 px-2 border m-2 border-slate-400 rounded-xl" onClick={sumarYMostrarResultado}>Enviar</button>
            </div>

            {resultado !== null && <p className="text-green-600 text-center">Total aproximado: {resultado} $</p>}
        </div>
    )
}
