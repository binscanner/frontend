import React from "react";
import Link from "next/link";
import { navbarButtons as data } from "../data/data";

const Navbar = () => {
    return (
        <nav className="w-screen h-auto flex justify-center absolute bottom-0 mobxl:hidden bg-black/20  z-50 p-3 backdrop-blur rounded-t-xl">
            <ul className="w-9/12 flex flex-row justify-around">
                {data.map(({ value, url, img }, index) => {
                    return (
                        <li
                            key={index}
                            value={value}
                            className="flex rounded-full w-11 h-11 items-center justify-center"
                        >
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
