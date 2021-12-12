import React from "react";
import Link from "next/link";
import { navbarButtons as data } from "../data/data";

const Navbar = () => {
    return (
        <nav className="w-screen h-auto flex justify-center absolute bottom-0 mobxl:hidden bg-white/20 z-50 p-5 backdrop-blur rounded-t-3xl">
            <ul className="w-9/12 flex flex-row justify-around">
                {data.map(({ value, url, img }, index) => {
                    return (
                        <li key={index} value={value}>
                            <Link href={url}>
                                <a>{img}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
