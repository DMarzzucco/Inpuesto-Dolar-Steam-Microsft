import AuthLocalContext from "./context/LocalContext";
import { HomeComp } from "./ui/home";

export default function Home() {
  return (
    <section className="flex flex-col  justify-center items-center w-full h-screen">
      <AuthLocalContext>
        <HomeComp />
      </AuthLocalContext>
    </section>
  )
}