"use client";
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
export default function Influ_serv() {
    const [carosel, setCarosel] = useState(1);
    function changeCaro(value) {
        setCarosel(value);
    }
    return (
        <section className=" flex flex-col mt-5 border py-24 mx-3  sm:mx-5 text-center">
            <h1 className="font-bold text-5xl sm:text-7xl mt-10 outlineShadow">
                Service
            </h1>
            <h1 className="font-mono mt-1">What we Do</h1>
            <div className="flex sm:flex-row flex-col gap-5 mt-24 sm:px-16 px-5 pb-10">
                <div className="carosel sm:border-r-2 sm:border-b-0 border-b-2 border-redishpink sm:overflow-hidden overflow-x-scroll  sm:w-2/6 flex flex-row gap-2 sm:flex-col">
                    {section.map((map) => (
                        <button
                            key={map.value}
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
                        <h1 key={map.value}
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
    );
}
