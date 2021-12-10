import React, { useEffect } from "react";
import Link from "next/link";
import { BsMoonFill } from "react-icons/bs";

const User = ({ theme, toggleTheme }) => {
    // useEffect(() => {
    //     document.documentElement.className = theme;
    //     localStorage.setItem("theme, theme");
    // }, [theme]);

    return (
        <div className="w-full h-1/2 flex flex-col md:hidden items-center justify-center">
            <div className="w-full h-full flex justify-center items-center flex-col rounded-xl">
                {/* <div
                    className="absolute left-0 top-0"
                    // onClick={toggleTheme()}
                >
                    <BsMoonFill size={32} />
                </div> */}
                <div className="w-28 h-28 bg-gray-200 rounded-full">
                    {/* miejsce na obrazek profilowe*/}
                </div>
                <p className="mt-4 text-2xl text-white font-semibold text-center">
                    Jan Kowalski
                </p>
                <Link href="/UserPanel">
                    <button className="text-center bg-userProfileColor text-white text-lg p-2 m-2 rounded-xl w-36">
                        Edit profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default User;
