import React from "react";
import Link from "next/link";
import { ScanBoxButtons as data } from "../data/data";

const LastScan = () => {
    return (
        <main className="w-full h-1/2  flex items-center justify-center p-8 pt-1">
            <div className="w-full h-full bg-lastScanColor rounded-xl flex flex-col items-center justify-evenly">
                <div className="text-2xl font-semibold text-center w-56 text-white">
                    {/* Last scan <p>{timeAgo}</p> */}
                    Scan your bin for better future
                </div>
                <div>
                    <ul className="text-3xl font-black text-center w-10/12 text-white">
                        {data.map((el, index) => {
                            const { text, url } = el;
                            return (
                                <li
                                    key={index}
                                    className="border-1 border-lastScanButtonColor "
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
