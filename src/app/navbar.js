"use client";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(true);
    function handleClick() {
        setOpenMenu(!openMenu);
        console.log(openMenu);
    }
    return (
        <div className="fixed w-full items-center justify-between flex top-0 p-5 sm:px-10 bg-inherit">
            <div className="justify-between flex w-full">
                <Link href="/" className={`text-3xl font-extrabold z-30`}>Chakraa</Link>
                <button className={`z-30 `} onClick={handleClick}>
                    <Hamburger
                    toggled={!openMenu}
                        size={32}
                        // color={`${openMenu ? "white" : "black"}`}
                    />
                </button>
            </div>
            <div
                className={`
                ${
                    openMenu ? "hidden" : "fixed"
                } bg-black h-screen top-0 left-0 right-0 z-10 navbar flex flex-row items-center text-center w-full justify-center gap-5 `}
            >
                {/* <div className="font-semibold text-black flex flex-col">
                    <h1>Chakraa</h1>
                </div> */}
                <div className="font-semibold text-white flex flex-col text-3xl" onClick={handleClick}>
                    <Link
                        href="/"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-redishpink hover:text-white rounded"
                        
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-redishpink hover:text-white rounded"
                    >
                        About
                    </Link>
                    <Link
                        href="/influencer"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-redishpink hover:text-white rounded"
                    >
                        Influencer
                    </Link>
                    <Link
                        href="/brand"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-redishpink hover:text-white rounded"
                    >
                        Brand
                    </Link>
                    <Link
                        href="/contact"
                        className="px-3 py-5 -skew-x-12 w-80 hover:bg-redishpink hover:text-white rounded"
                    >
                        Contact
                    </Link>
                    <div href="/" className="text-base font-normal flex flex-row gap-2 justify-center absolute bottom-16 right-0 left-0">
                        <Link className="hover:underline" href="/">
                            Facebook
                        </Link>
                        <Link className="hover:underline" href="/">
                            Instagram
                        </Link>
                        <Link className="hover:underline" href="/">
                            Twitter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
