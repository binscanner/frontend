import React from "react";
import Link from "next/link";
import { ScanBoxButtons as data } from "../data/data";

const LastScan = () => {
    return (
        <main className="w-3/5 h-1/3 flex items-center justify-center p-10">
            <div className="w-full h-full bg-lastScanColor/90 rounded-xl flex flex-col items-center justify-evenly ">
                <div className="text-2xl font-semibold text-center w-56 text-white">
                    {/* Last scan <p>{timeAgo}</p> */}
                    Scan your bin for better future
                </div>
                <div>
                    <ul className="text-3xl font-black text-center w-full text-white flex items-centerjustify-center">
                        {data.map((el, index) => {
                            const { text, url } = el;
                            return (
                                <li
                                    key={index}
                                    className="text-center bg-userProfileColor text-white text-lg p-2 m-2 rounded-xl w-36 "
                                >
                                    <Link href={url}>
                                        <a>{text}</a>
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
