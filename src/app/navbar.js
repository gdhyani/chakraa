"use client";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(true);
    function handleClick() {
        setOpenMenu(!openMenu);
        console.log(openMenu);
    }
    return (
        <div className="fixed w-full items-center justify-between flex top-0 p-5 sm:px-10 bg-inherit">
            <div className="justify-between flex w-full">
                <h1
                    className={`text-3xl font-extrabold z-30 ${
                        openMenu ? "text-white" : "text-black"
                    }`}
                >
                    Chakraa
                </h1>
                <button className={`z-30 `} onClick={handleClick}>
                    <Hamburger
                        size={32}
                        color={`${openMenu ? "white" : "black"}`}
                    />
                </button>
            </div>
            <div
                className={`
                ${
                    openMenu ? "hidden" : "fixed"
                } bg-white h-screen top-0 left-0 right-0 z-10 navbar flex flex-row items-center text-center w-full justify-center gap-5 `}
            >
                {/* <div className="font-semibold text-black flex flex-col">
                    <h1>Chakraa</h1>
                </div> */}
                <div className="font-semibold text-black flex flex-col">
                    <Link
                        href="/"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-red-500 hover:text-white rounded"
                    >
                        Home
                    </Link>
                    <Link
                        href="/"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-red-500 hover:text-white rounded"
                    >
                        About
                    </Link>
                    <Link
                        href="/"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-red-500 hover:text-white rounded"
                    >
                        Influencer
                    </Link>
                    <Link
                        href="/"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-red-500 hover:text-white rounded"
                    >
                        Brand
                    </Link>
                    <Link
                        href="/"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-red-500 hover:text-white rounded"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}
