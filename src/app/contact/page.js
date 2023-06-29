"use client";

import { useState } from "react";
import "./contact.css";
import Faq from "../components/faq";
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "",
        phone: "",
    });
    return (
        <main>
            <section className="">
                <div className="pt-20 mx-10 my-36">
                    <h1 className="text-7xl font-extrabold">Become a Client</h1>
                    <h1 className="text-lg sm:text-2xl font-light font-mono mt-12">
                        Our clients get the best results when they have our team
                        dedicated to their business for extended periods of
                        time. This is why we are looking for ongoing
                        collaboration where our professionals are like your team
                        members who just happen to be remote. Ready to move
                        forward?
                    </h1>
                    <form method="POST" id="contactForm" className="flex flex-col gap-8 mt-20 sm:mt-28 items-center sm:items-stretch">
                        <input
                            name="name"
                            placeholder="Name"
                            className="input"
                            type="text"
                            onChange={(ev) => {
                                console.log(ev.target.value);
                            }}
                        />
                        <input
                            name="name"
                            placeholder="Email Address"
                            type="email"
                            className=""
                            onChange={(ev) => {
                                console.log(ev.target.value);
                            }}
                        />
                        <input
                            name="name"
                            placeholder="Phone Number"
                            type="text"
                            className=""
                            onChange={(ev) => {
                                console.log(ev.target.value);
                            }}
                        />
                        <select name="type" form="contactForm" required>
                        <option value="" hidden>Choose an Option</option>

                            <option value="Client">Client</option>
                            <option value="Influencer">Influencer</option>
                            <option value="Other">Other</option>
                        </select>
                        <button className=" px-5 py-2 w-max border-2 hover:border-transparent hover:bg-redishpink border-redishpink bg-transparent rounded-xl" type="submit" onClick={()=>{submitForm}}>Get in Touch</button>
                       
                    </form>
                </div>
            </section>
            <Faq/>
        </main>
    );
}
