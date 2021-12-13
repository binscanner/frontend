import React, { useEffect } from "react";
import Link from "next/link";
import { BsMoonFill } from "react-icons/bs";

const User = ({ theme, toggleTheme }) => {
    // useEffect(() => {
    //     document.documentElement.className = theme;
    //     localStorage.setItem("theme, theme");
    // }, [theme]);

    return (
        <div className="w-full pl-8 p-10 pr-1 h-1/2 flex flex-col xl:hidden items-center justify-center  ">
            <div className="w-full h-full flex justify-center items-center flex-col rounded-xl bg-black/20  off:bg-white/20 backdrop-blur shadow-xl duration-300">
                {/* <div
                    className="absolute left-0 top-0"
                    // onClick={toggleTheme()}
                >
                    <BsMoonFill size={32} />
                </div> */}
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="./assets/avatar.png" alt="" className="w-11/12" />
                </div>
                <p className="mt-4 text-2xl text-white font-semibold text-center">
                    Jan Kowalski
                </p>
                <Link
                    href="/UserPanel"
                    as={process.env.BACKEND_URL + "/UserPanel"}
                >
                    <button className="text-center bg-userProfileColor text-white text-lg p-2 m-5 rounded-xl w-36 2xl:text-sm">
                        Edit profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default User;
