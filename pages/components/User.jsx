import React from "react";
import Link from "next/link";
import { BsMoonFill } from "react-icons/bs";

const User = () => {
    return (
        <div className="w-1/2 h-1/2 flex flex-col md:hidden items-center justify-center top-0 left-0">
            <div className="w-1/2  flex justify-center items-center flex-col relative">
                <div className="absolute left-0 top-0">
                    <BsMoonFill size={32} />
                </div>
                <div className="w-28 h-28 bg-gray-200 rounded-md">
                    {/* miejsce na obrazek profilowe*/}
                </div>
                <p className="m-2 text-3xl font-semibold text-center">
                    Jan Kowalski
                </p>
                <p className=" text-xl text-center">janKowal@gamil.com</p>
                <Link href="/UserPanel">
                    <button className="text-center bg-userProfileColor text-white text-xl p-3 m-4 rounded-3xl w-36">
                        User Panel
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default User;
