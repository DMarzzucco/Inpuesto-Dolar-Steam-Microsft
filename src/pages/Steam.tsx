import { useState, ChangeEvent } from "react";

function Steam() {
    const [valorInput, setValorInput] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValorInput(event.target.value);
    }

    const sumarYMostrarResultado = () => {
        const valorNumero: number = parseFloat(valorInput);
        const resultadoSuma: number = valorNumero + 3;
        setResultado(resultadoSuma);
    }

    return (
        <>
            <section className="h-screen flex justify-center items-center">
                <div>
                    <h1>STEAM PAGE</h1>

                    <div>
                        <input type="text" placeholder="valor" value={valorInput} onChange={handleInputChange} />
                        <button onClick={sumarYMostrarResultado}>Enviar</button>
                    </div>

                    {resultado !== null && <p>El resultado de sumar {valorInput} más 3 es: {resultado}</p>}
                </div>
            </section>
        </>
    );
}

export default Steam;
