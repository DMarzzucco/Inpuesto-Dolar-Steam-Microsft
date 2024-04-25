import { Bas } from "../components/ConvertComp";
import {faMicrosoft} from "../components/icons.ts"

function Microsft() {
    return (
        <>
            <section className="flex flex-col w-full h-screen justify-center items-center">
                <Bas color="skyblue" icon={faMicrosoft} num={1.60} title="Microsoft"></Bas>
            </section>
        </>
    )

}

export default Microsft;
