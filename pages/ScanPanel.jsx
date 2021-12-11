import React from "react";
import Link from "next/link";
import { scanPanelButtons as data } from "../data/data";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const ScanPanel = () => {
    return (
        <div className="flex flex-col justify-center align-center w-screen h-screen relative">
            <span className=" absolute top-3 left-3 sm:top-1 sm:left-1">
                <Link href="javascript:history.go(-1)">
                    <HiOutlineArrowNarrowLeft size={40} />
                </Link>
            </span>

            <p className="h-1/6 w-screen text-4xl sm:text-3xl flex justify-center items-center text-center">
                What do you want scan?
            </p>

            <ul className="h-5/6 w-screen flex items-center justify- flex-wrap flex-row  xl:flex-col">
                {data.map((el, index) => {
                    const { name, style } = el;
                    return (
                        <li
                            key={index}
                            className={`w-2/5 h-2/5 xl:w-4/5 xl:h-1/5 uppercase bg-gray-300  duration-300 font-extrabold flex m-auto text-center rounded-xl text-5xl items-center justify-center sm:text-3xl  ${style}`}
                        >
                            {name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ScanPanel;
