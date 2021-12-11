import React from "react";
import Link from "next/link";
import { scanBoxButtons as data } from "../data/data";

const LastScan = () => {
    return (
        <main className="w-full h-1/3 flex items-center justify-center p-10 xl:h-full xl:w-screen xl:p-2">
            <div className="w-full h-full off:bg-gray-500/90 bg-lastScanColor/90 duration-500 shadow-xl rounded-xl flex flex-col items-center justify-evenly">
                <div className="text-2xl 2xl:text-lg font-semibold text-center w-56 xl:w-full text-black">
                    {/* Last scan <p>{timeAgo}</p> */}
                    Scan your bin for better future
                </div>
                <div>
                    <ul className="text-xl 2xl:text-md font-thin text-center w-full text-white flex items-center justify-center xl:flex-col">
                        {data.map((el, index) => {
                            const { text, url } = el;
                            return (
                                <li
                                    key={index}
                                    className="text-center  bg-userProfileColor text-white p-2 m-2 rounded-xl w-36 xl:text-sm 2xl:text-xl"
                                >
                                    <Link href={url}>
                                        <a className="">{text}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default LastScan;
