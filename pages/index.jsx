import React from "react";
import Link from "next/link";
import { mainButtons } from "../data/data";
import Wave from "react-wavify";

const Home = () => {
    return (
        <main className="h-screen w-screen flex flex-col  items-center">
            <label
                htmlFor=""
                className="logo font-k2d font-extrabold text-6xl py-16 z-10"
            >
                binscanner
            </label>
            <span className="flex flex-row-reverse lg:flex-col items-center justify-center p-15 w-full h-3/5 z-10">
                <img
                    src="/assets/logo.png"
                    alt=""
                    className="w-1/4 mr-20 xsm:w-4/5 md:w-2/5 lg:m-0 lg:w-2/6 xl:w-2/6 "
                />
                <div className="flex flex-col items-center justify-center ">
                    <p className="w-2/3 lg:w-full font-k2d text-5xl lg:text-3xl  p-10 text-center">
                        Save your World You Live In
                    </p>
                    <div className="flex flex-col w-2/3 justify-center mx-1   p-10  z-10">
                        {mainButtons.map(({ text, style, href }, index) => {
                            return (
                                <div key={index} className={style}>
                                    <Link
                                        href={href}
                                        as={process.env.BACKEND_URL + href}
                                        className="w-full h-full"
                                    >
                                        <a> {text} </a>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </span>

            <Wave
                fill="#258C25"
                className="absolute w-screen h-1/4 left-0 bottom-0 z-0 md:hidden"
                options={{
                    amplitude: 100,
                    speed: 0.1,
                    points: 3,
                }}
            />
        </main>
    );
};

export default Home;
