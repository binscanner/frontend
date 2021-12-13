import React from "react";
import Link from "next/link";
import { signupButtons as data } from "../data/data";

const Signup = () => {
    return (
        <article className="flex flex-col w-screen h-screen justify-center items-center">
            <div className=" m-10">
                <Link href="/" as={process.env.BACKEND_URL + "/"}>
                    <a className="font-k2d text-5xl">binscanner</a>
                </Link>
            </div>
            <form
                action=""
                className="flex flex-col items-center justify-center w-72"
            >
                <span className="flex flex-row justify-between w-full items-center m-4">
                    <label className="text-2xl" htmlFor="">
                        Sign up
                    </label>
                    <label className="text-xl" htmlFor="">
                        <Link
                            href="/Login"
                            as={process.env.BACKEND_URL + "/Login"}
                        >
                            <a className="link-custom"> Log in </a>
                        </Link>
                    </label>
                </span>
                <input
                    type="text"
                    className="border-gray-400 border-solid border rounded p-2 w-full m-2"
                    placeholder="Name"
                />
                <input
                    type="text"
                    className="border-gray-400 border-solid border rounded p-2 w-full m-2"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="border-gray-400 border-solid border rounded p-2 w-full m-2"
                    placeholder="Password"
                />
                <input
                    type="password"
                    className="border-gray-400 border-solid border rounded p-2 w-full m-2"
                    placeholder="Repeat Password"
                />
                <input
                    type="submit"
                    className="font-semibold bg-gray-300 duration-300 hover:bg-gray-400 text-white border-none rounded p-2 w-full m-2"
                    value="Sign up"
                />
            </form>

            <span className="flex flex-col justify-center items-center w-72 mt-5 mb-2">
                <hr className="bg-gray-300" /> <span> Other methods </span>{" "}
                <hr className="bg-gray-300" />
            </span>

            {data.map((el) => {
                const { value, img } = el;
                return (
                    <button className="flex flex-row w-72 p-2 items-center duration-200 justify-center border-grey-400 hover:bg-gray-100 border rounded m-1">
                        {" "}
                        <span className="mr-2">{img}</span> {value}
                    </button>
                );
            })}
        </article>
    );
};

export default Signup;
