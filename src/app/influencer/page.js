import GetInTouch from "../components/getInTouch"
import Influ_serv from "../components/influ_serv";

export default function Influencer() {
    return (
        <main>
            <section className="min-h-screen mx-10 sm:mx-5">
                <h1 className="text-5xl sm:text-7xl">Influencer</h1>
                <h1 className="text-3xl sm:text-4xl">We are one of the fastest-growing influencer marketing agencies in India.</h1>
                <div></div>
            </section>
            <Influ_serv/>
            <GetInTouch></GetInTouch>
        </main>
    );
}
