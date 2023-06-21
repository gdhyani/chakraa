import GetInTouch from "../components/getInTouch";
import Influ_serv from "../components/influ_serv";
import Image from "next/image";
import "./influencer.css";
const Itypes = [
    "Music/Dance",
    "Auto",
    "Tech",
    "Fintech/Edtech",
    "Gaming",
    "Auther/Podcaster",
    "Metaverse/Web 3",
    "Entertainment",
    "Food",
    "Fasion",
    "Travel",
    "Parenting",
    "Health/Fitness",
];
export default function Influencer() {
    return (
        <main>
            <section className="flex flex-col">
                <div className="mx-10 my-36">
                    <h1 className="sm:text-7xl text-5xl font-extrabold">
                        Influencer
                    </h1>
                    <h1 className="text-lg sm:text-2xl font-light font-mono mt-12">
                        Whether you have a niche or you are a jack of all
                        traits, we surely have something for you. We have tonnes
                        different businesses and brands onboard who are on a
                        constant lookout for influencers to collaborate with and
                        give honest feedback. Whether you do vlogs, or reviews
                        or just about anything we can help you grow with us.
                    </h1>
                </div>
                <div className="flex flex-wrap flex-row px-10">
                    <div className="lg:w-1/3 px-3 py-10">
                        <Image
                            width={100}
                            height={100}
                            src="./svgexport-9.svg"
                        />{" "}
                        <h1 className="text-2xl font-bold mb-5">We Ideate</h1>
                        <h1 className="font-mono text-lg">
                            Our team of highly skilled strategists ensure that
                            every marketing strategy we create is in line with
                            the business direction and creative direction you
                            set out.
                        </h1>
                    </div>
                    <div className="lg:w-1/3 px-3 py-10">
                        <Image
                            width={100}
                            height={100}
                            src="./svgexport-11.svg"
                        />{" "}
                        <h1 className="text-2xl font-bold mb-5">We Create</h1>
                        <h1 className="font-mono text-lg">
                            Our team of creative heads believe marketing is all
                            about creating culture. We believe in creating
                            out-of-the-box creative channels to maximize
                            campaign effectiveness.
                        </h1>
                    </div>
                    <div className="lg:w-1/3 px-3 py-10">
                        <Image
                            width={100}
                            height={100}
                            src="./svgexport-13.svg"
                        />{" "}
                        <h1 className="text-2xl font-bold mb-5">We Execute</h1>
                        <h1 className="font-mono text-lg">
                            Our execution specialists ensure that we deliver and
                            execute the campaign timely through the right
                            influencer channel resulting in impactful
                            impressions and highquality engagement.
                        </h1>
                    </div>
                </div>
            </section>
            <section className="py-28 w-screen">
                <h1 className="mx-10 font-bold text-5xl sm:text-7xl outlineShadow text-center">
                    Influencer{" "}
                    <span className="bg-redishpink outlineShadow2">
                        Categories
                    </span>
                </h1>
                <h1 className="mx-10 mt-5 text-2xl font-mono text-center">
                    We adapt in
                </h1>

                {/* <div className="-z-10 flex flex-wrap px-3 mt-20 justify-start sm:justify-center">
                    {Itypes.map((t) => (
                        <div className="border-2 glass border-redishpink w-1/2 flex justify-between flex-col sm:w-64 h-80">
                            <h1 className="text-3xl">
                                {Itypes.indexOf(t) + 1}
                            </h1>
                            <h1 className="text-xl font-bold text-center mb-10">
                                {t}
                            </h1>
                        </div>
                    ))}
                </div> */}
            </section>
            <Influ_serv />
            <GetInTouch></GetInTouch>
        </main>
    );
}
