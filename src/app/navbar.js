"use client";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    function handleClick() {
        setOpenMenu(!openMenu);
        console.log(openMenu);
    }
    return (
        <div className="fixed w-full items-center justify-between flex top-0 p-5 sm:px-10 bg-inherit">
            <div >
                <h1 className="text-3xl font-extrabold">Chakraa</h1>
            </div>
            <div>
                
               <button><Hamburger size={32} /></button> 
            </div>
        </div>
    );
}
