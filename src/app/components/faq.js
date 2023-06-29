"use client";

import Image from "next/image";
import { useState } from "react";
import "../page.css"

const questions = [
    {
        value: 1,
        ques: "I am a creator. How can I start working with brands?",
        ans: "Join the CelebFarm creator community by filling up the registration form. We will verify your profile suggest brand collaborations according to your niche and audience.",
    },
    {
        value: 2,
        ques: "Why should I choose Chakraa?",
        ans: "In the fast-paced world of marketing, our approach is driven by technology and data. Our team is up-to-date with trends and ever-changing algorithms, giving us an edge.",
    },
    {
        value: 3,
        ques: "What’s the difference between a paid and barter campaign?",
        ans: "In a barter campaign, the creator is compensated for their content creation with free product. In a paid campaign, creators receive monetary payment in exchange for collaboration.",
    },
    {
        value: 4,
        ques: "How can I qualify for brand collaborations?",
        ans: "We work with creators from all niches. There is no minimum follower number to qualify; you only need to have an authentic following and share genuine content.",
    },
    {
        ques: "How can my brand benefit from influencer marketing?",
        value: 5,
        ans: "Influencer marketing delivers 11x more ROI than paid ads and is more affordable in comparison to celebrity endorsements. It is the best way to increase brand awareness and generate sales, especially on a budget.",
    },
];
export default function Faq() {
    const [faq, setOpenFaq] = useState(1);
    function openFaq(evt) {
        setOpenFaq(evt);
    }
    return (
        <section className="flex flex-col mx-5 py-20">
            <div class="container flex flex-col justify-center p-4 mx-auto md:p-8 ">
                <div className="flex w-full text-center justify-center">
                    <p class="px-3 w-fit text-center bg-redishpink justify-center font-medium">
                        How it works
                    </p>
                </div>

                <h2 class="mb-12 text-5xl font-bold text-center sm:text-7xl outlineShadow">
                    Frequently Asked Questions
                </h2>
                <div class="grid mt-24 gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    {questions.map((map) => (
                        <div key={map.value}>
                            <h3 class="font-semibold font-mono text-xl">
                                {map.ques}
                            </h3>
                            <p class="mt-1 dark:text-gray-400 font-mono text-lg">
                                {map.ans}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
