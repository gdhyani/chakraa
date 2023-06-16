"use client";
import Image from "next/image";
import Link from "next/link";
import "./page.css";
import { useState } from "react";
const section = [
    {
        name: "Whatsapp Marketing",
        value: 1,
        des: "WhatsApp marketing is a type of messenger marketing, which implies promoting your brand through WhatsApp. This channel helps your brand reach an enormous audience, build strong relationships with customers, and increase sales. At Socioclout we help you generate more buzz with broadcast messages and seeding CTAs in relevant WhatsApp groups.",
    },
    {
        name: "Crisis Management",
        value: 2,
        des: "A crisis can occur as a result of an unpredictable event or an unforeseeable consequence of an event considered a potential risk. We help with crisis management by deploying strategies designed to help you deal with a sudden and significant negative event.",
    },
    {
        name: "Influencer Campaigns",
        value: 3,
        des: "Influencer marketing is a type of social media marketing that uses endorsements and product mentions from influencers–individuals who have a dedicated social following and are viewed as experts within their niche. Our network of 100,000+ influencers means we are able to match the brand with the perfect influencers– no matter what the requirements or what the platform is.",
    },
    {
        name: "Twitter Influencer",
        value: 4,
        des: "Twitter influencer marketing is partnering with Twitter accounts that engage in the brand’s area of interest, and collaborating with them to create brand-sponsored tweets. Tweets around viral and trending topics coupled with relevant hashtags from trusted influencers help garner higher engagement. Twitter significantly impacts the middle of the funnel and can help you drive conversations at scale. We help brands with Twitter Trending, Premium Twitter Influencers seeding and many more services.",
    },
    {
        name: "Meme Marketing",
        value: 5,
        des: "Users consume huge quantities of memes on a daily basis; hence, memes make a great way by which marketers can catch and keep the audience’s attention. They have become the latest weapon for marketers because of their ability to communicate the story without the use of many words. We help the brands with the creation of memes in accordance with their campaigns. These memes enclose the brand’s message outlined with humour, keeping in mind our target audience so that they resonate well with the brand’s campaign.",
    },
];

export default function Home() {
    const [carosel, setCarosel] = useState(1);
    function changeCaro(value) {
        setCarosel(value);
    }
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
                        <h1 className="text-lg sm:text-xl w-3/4 sm:w-1/2 px-5 pb-20 font-mono">
                            We simplify influencer marketing by getting brands
                            and influencers together on the same platform.
                        </h1>
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
            <section className=" flex border mx-3 sm:mx-5 px-4 pt-10">
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
            <section className=" flex flex-col mt-5 border py-5 mx-3  sm:mx-5 text-center">
                <h1 className="font-bold text-5xl sm:text-7xl mt-10 outlineShadow">
                    Service
                </h1>
                <h1 className="font-mono mt-1">What we Do</h1>
                <div className="flex sm:flex-row flex-col gap-5 mt-16 sm:px-16 px-5 pb-10">
                    <div className="carosel sm:border-r-2 sm:border-b-0 border-b-2 border-redishpink sm:overflow-hidden overflow-x-scroll  sm:w-2/6 flex flex-row gap-2 sm:flex-col">
                        {section.map((map) => (
                            <button
                                className={`p-3 ${
                                    carosel == map.value
                                        ? "text-redishpink"
                                        : "text-white"
                                }`}
                                onClick={() => {
                                    changeCaro(map.value);
                                }}
                            >
                                {map.name}
                            </button>
                        ))}
                    </div>
                    <div className="px-5 sm:w-4/6 mt-5 sm:mt-0">
                        {section.map((map) => (
                            <h1
                                className={`${
                                    carosel == map.value ? "block" : "hidden"
                                } font-mono`}
                            >
                                {map.des}
                            </h1>
                        ))}
                    </div>
                </div>
            </section>

            {/* section5 */}
            <section className="flex bg-white text-black sm:flex-row flex-col text-center sm:text-left items-center justify-between   py-20 px-20 mt-10 rounded-t-3xl">
                <div>
                    <h1 className="text-3xl font-mono">
                        We would love to hear from{" "}
                    </h1>
                    <br />
                    <h1 className="text-7xl font-black mt-5 sm:mt-0 ">You</h1>
                </div>
                <Link
                    href="/contact"
                    className="flex flex-row gap-3 hover:scale-110 border-redishpink  transition-all mt-12 sm:mt-0 bg-redishpink text-white rounded-xl px-5 py-4 text-2xl"
                >
                    Get in Touch{" "}
                    <Image
                        src="/arrow.svg"
                        className="w-14"
                        width={10}
                        height={10}
                        alt="arrow"
                    />
                </Link>
            </section>
        </main>
    );
}
