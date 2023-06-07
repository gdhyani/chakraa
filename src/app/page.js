import Image from "next/image";
import Link from "next/link";
import "./page.css";
export default function Home() {
    return (
        <main className=" h-screen overflow-hidden">
            <section id="landing" className="px-5">
                <div className="flex flex-col justify-center border h-screen">
                    <h1 className="text-2xl relative top-10 px-5">We Are</h1>
                    <div class="wrapper">
                        <div class="marquee flex gap-2 ">
                            <p>Social Media Marketing Agency. Social Media Marketing Agency.</p>
                        </div>
                    </div>
                    <h1 className="text-xl w-1/2 px-5">With the right set of influencers based on their content style, demographics, audience and other metrics.</h1>
                </div>
            </section>
        </main>
    );
}
