import React from "react";
import Link from "next/link";
import { NavbarButtons as data } from "../data/data";

const Navbar = () => {
    return (
        <nav className="w-screen h-auto flex justify-center absolute bottom-8 mobmd:hidden">
            <ul className="w-9/12 flex flex-row justify-around">
                {data.map((el, index) => {
                    const { value, url, img } = el;
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
