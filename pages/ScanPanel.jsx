import React from "react";
import Link from "next/link";
import { scanPanelButtons as data } from "../data/data";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const ScanPanel = () => {
    return (
        <div className="flex flex-col justify-center align-center w-screen h-screen relative bg-home">
            <span className=" absolute top-10 left-10 sm:top-1 sm:left-1">
                <Link href="javascript:history.go(-1)">
                    <HiOutlineArrowNarrowLeft size={40} color="white" />
                </Link>
            </span>

            <p className="h-1/6 w-screen text-4xl sm:text-3xl flex justify-center text-white items-center text-center">
                What do you want scan?
            </p>

            <ul className="h-5/6 w-screen flex items-center justify-center flex-wrap flex-col xl:flex-nowrap  xl:flex-col p-10 z-10 ">
                {data.map(({ id, name, style }) => {
                    return (
                        <li
                            key={id}
                            className={`${style} w-1/2 h-1/6 xl:w-full xl:bg-lastScanColor/90  xl:m-4  xl:h-1/5 uppercase hover:bg-lastScanColor/80 bg-lastScanColor/50  duration-300 font-extrabold flex m-auto text-center rounded-xl text-5xl items-center justify-center sm:text-3xl `}
                        >
                            {name}
                        </li>
                    );
                })}
            </ul>

            <img
                src="/assets/comp2-waves.png"
                alt=""
                className="absolute w-full left-0 bottom-0 z-0 md:hidden"
            />
            <img
                src="/assets/mobile.svg"
                alt=""
                className="absolute w-full left-0 bottom-0 z-0 mobmd:hidden"
            />
        </div>
    );
};

export default ScanPanel;
