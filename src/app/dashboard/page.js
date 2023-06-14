"use client";

import { useState } from "react";

async function getData() {
    console.log('fetching data')
    const url =
        "https://unofficial-cricbuzz.p.rapidapi.com/matches/get-schedules?matchType=international";
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "92a19212c2msh4f5a03980938d56p1ec234jsnec616317852d",
            "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
        },
    });
    const data = await response.text();
    console.log(data)

}

export default async function Dashboard() {
    const [user_name, setUser_name] = useState("");
    return (
        <div className="mt-24 h-screen px-10 sm:px-20">
            <div className="w-full text-center">
                <form className="flex flex-col sm:w-1/3 m-auto" action="POST">
                    <label>User Name </label>
                    <input
                        className="py-1 px-5 my-2 bg-transparent text-white border-red border rounded-md"
                        type="text"
                        name="user_name"
                        value={user_name}
                        onChange={(evt) => {
                            setUser_name(evt.target.value);
                            console.log(evt.target.value);
                        }}
                        placeholder="user name"
                    />
                    <br />
                    <button className="border rounded-md bg-transparent hover:border-red-500 hover:text-red-500 py-1 px-5">
                        Find
                    </button>
                </form>
            </div>
            <div className="text-center w-full ">
                <h1></h1>
            </div>
        </div>
    );
}

// ?__a=1&__d=dis
