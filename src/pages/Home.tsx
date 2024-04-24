import {HomeComp} from "../components/Comps.tsx";

function Home() {
    return (
        <>
            <section className="flex flex-col  justify-center items-center w-full h-screen">
                <h1 className="text-2xl ">Elige tu plataforma</h1>
                {/*componente aparte*/}
                <HomeComp/>
            </section>
        </>
    )

}

export default Home;