"use client";
import Image from "next/image";
import Link from "next/link";
import "./page.css";
import GetInTouch from "./components/getInTouch"
import Influ_serv from "./components/influ_serv"
import { useState } from "react";


export default function Home() {

    return (
        <main className="">
            <section id="landing" className=" px-3 sm:px-5">
                <div className="flex flex-col pt-24 border ">
                    <h1 className="text-2xl relative top-10 px-5 font-mono -z-10">
                        We are
                    </h1>
                    <div className="wrapper">
                        <div className="marquee flex gap-2 -z-10">
                            <p>
                                Social Media Marketing Agency. Social Media
                                Marketing Agency.
                            </p>
                        </div>
                    </div>
                    <div className="border ">
                        <div className="flex flex-row justify-between pr-7 overflow-hidden  sm:pr-20">
                            <h1 className="text-lg sm:text-xl w-3/4 sm:w-1/2 px-5 pt-10 pb-20 font-mono">
                                We simplify influencer marketing by getting
                                brands and influencers together on the same
                                platform.
                            </h1>
                            <Image
                                src="./svg1.svg"
                                alt="animation"
                                width={50}
                                height={50}
                                className="svg1 w-20 -z-10  "
                            />
                        </div>

                        <h1 className="mb-12 px-5 underline border decoration-redishpink h-10 flex items-center font-mono">
                            Swipe Down
                        </h1>
                    </div>
                </div>
            </section>

            {/* section-2  */}
            <section id="2nd-landing" className="px-3 sm:px-5 ">
                <div className="flex sm:flex-row flex-col gap-10  py-5 sm:mx-20">
                    <div className="flex flex-col border m-auto p-16 ">
                        <h1 className="italic">
                            I'm an <br />
                            <span className="not-italic font-extrabold text-5xl text-redishpink  hover:underline">
                                Influencer
                            </span>
                        </h1>
                        <p className="mt-10 mb-3 font-light font-mono">
                            Whether you have a niche or you are a jack of all
                            traits, we surely have something for you. We have
                            tonnes different businesses and brands onboard who
                            are on a constant lookout for influencers to
                            collaborate with and give honest feedback. Whether
                            you do vlogs, or reviews or just about anything we
                            can help you grow with us.
                        </p>
                        <Link
                            href="/"
                            className="text-sm font-mono underline mt-5"
                        >
                            Learn More
                        </Link>
                    </div>
                    <div className="flex flex-col border  m-auto p-16  ">
                        <h1 className="italic">
                            I'm a <br />
                            <span className="not-italic font-extrabold text-5xl text-redishpink hover:underline">
                                Brand
                            </span>
                        </h1>
                        <p className="mt-10 mb-3 font-light font-mono">
                            With the increasing dependence on reviews and social
                            media presence, influencer marketing strategy, can
                            make or break your brand. We at freeskout have a
                            pool of influencers of different categories that can
                            be the best blend for your brand and boost up your
                            marketing curve. A final desinantion for all your
                            marketing needs.
                        </p>
                        <Link
                            href="/"
                            className="text-sm font-mono underline mt-5"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className=" flex border mx-3 sm:mx-5 px-4 py-32">
                <div className="text-center">
                    <h1 className="text-5xl sm:text-7xl font-bold outlineShadow">
                        Platforms
                    </h1>
                    <h1 className="text-xl font-mono mb-8">we operates in</h1>
                    <div className="flex flex-wrap flex-row text-center justify-center">
                        <Link href="/" className="m-3">
                            <Image
                                className="w-12"
                                src="/col (1).svg"
                                height={20}
                                width={20}
                                alt="logo"
                            ></Image>
                        </Link>
                        <Link href="/" className="m-3">
                            <Image
                                className="w-12"
                                src="/col (2).svg"
                                height={50}
                                width={50}
                                alt="logo"
                            ></Image>
                        </Link>
                        <Link href="/" className="m-3">
                            <Image
                                className="w-12"
                                src="/col (3).svg"
                                height={50}
                                width={50}
                                alt="logo"
                            ></Image>
                        </Link>
                        <Link href="/" className="m-3">
                            <Image
                                className="w-12"
                                src="/col (4).svg"
                                height={50}
                                width={50}
                                alt="logo"
                            ></Image>
                        </Link>
                        <Link href="/" className="m-3">
                            <Image
                                className="w-12"
                                src="/col (5).svg"
                                height={50}
                                width={50}
                                alt="logo"
                            ></Image>
                        </Link>
                        <Link href="/" className="m-3">
                            <Image
                                className="w-12"
                                src="/col (6).svg"
                                height={50}
                                width={50}
                                alt="logo"
                            ></Image>
                        </Link>
                    </div>
                    <p className="sm:px-32 py-3 font-mono">
                        Every platform has its own demographics, rules and
                        styles, and knowing which platforms are right for the
                        brand is very important. We have a huge pool of
                        influencers in the above - mentioned platforms, which we
                        deploy for our campaigns.
                    </p>
                </div>
            </section>

            {/* section4 */}
            <Influ_serv/>

            {/* section5 */}
            <GetInTouch/>
        </main>
    );
}
