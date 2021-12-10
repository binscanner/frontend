import React from "react";
import Link from "next/link";
import { MainButtons } from "../data/data";

const Home = () => {
    return (
        <main className="h-screen w-screen flex flex-col justify-center items-center">
            <label htmlFor="" className="logo font-k2d font-extrabold text-6xl pb-16 ">
                binscanner
            </label>
            <span className="flex flex-row-reverse lg:flex-col items-center justify-center h-3/5">
                <img
                    src="/assets/logo.png"
                    alt=""
                    className="w-1/4 mr-20 xsm:w-4/5 md:w-2/5 lg:m-0 lg:w-2/6 xl:w-2/6 "
                />
                <p className="w-1/2 lg:w-full font-k2d text-5xl lg:text-3xl p-10 text-center">
                    Save your World You Live In
                </p>
            </span>
            <div className="flex flex-col mx-1 self-center moblg:ml-10 moblg:self-start">
                {MainButtons.map(({ text, style, href }, index) => {
                    return (
                        <div key={index} className={style}>
                            <Link href={href} className="w-full h-full">
                                <a> {text} </a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Home;
