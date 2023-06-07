import Image from "next/image";
import Link from "next/link";
import "./page.css";
export default function Home() {
    return (
        <main className="overflow-hidden">
            <section id="landing" className=" px-3 sm:px-5">
                <div className="flex flex-col pt-24 border ">
                    <h1 className="text-2xl relative top-10 px-5 font-mono ">
                        We are
                    </h1>
                    <div className="wrapper">
                        <div className="marquee flex gap-2 ">
                            <p>
                                Social Media Marketing Agency. Social Media
                                Marketing Agency.
                            </p>
                        </div>
                    </div>
                    <div className="border ">
                        <h1 className="text-lg sm:text-xl w-3/4 sm:w-1/2 px-5 pb-20 font-mono">
                            We simplify influencer marketing by getting brands
                            and influencers together on the same platform.
                        </h1>
                        <h1 className="mb-12 px-5 underline border decoration-red-500 h-10 flex items-center font-mono">
                            Swipe Down
                        </h1>
                    </div>
                </div>
            </section>
            {/* section-2  */}
            <section id="2nd-landing" className="px-3 sm:px-5 h-screen">
                {/* <div className="flex sm:flex-row flex-col gap-4  py-5 ">
                    <div className="flex border w-full  m-auto p-5 bg-neutral-900 h-40">1</div>
                    <div className="flex border w-full  m-auto p-5 bg-neutral-900 h-40">2</div>
                </div> */}
            </section>
        </main>
    );
}
