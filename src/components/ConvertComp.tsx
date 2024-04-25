import { useState, ChangeEvent } from "react";
interface Numpros {
    num: number;
    title: string;
}

export const Bas: React.FC<Numpros> = ({ num, title }) => {
    const [valorInput, setValorInput] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValorInput(event.target.value);
    }

    const sumarYMostrarResultado = () => {
        const valorNumero: number = parseFloat(valorInput);
        const resultadoSuma: number = valorNumero + num;
        setResultado(resultadoSuma);
    }
    return (
        <div>
            <h1>{title}</h1>

            <div>
                <input type="text" placeholder="valor" value={valorInput} onChange={handleInputChange} />
                <button onClick={sumarYMostrarResultado}>Enviar</button>
            </div>

            {resultado !== null && <p>El resultado de sumar {valorInput} más {num} es: {resultado}</p>}
        </div>
    )
}
