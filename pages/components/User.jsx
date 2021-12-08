import React from "react";
import Link from "next/link";

const User = () => {
    return (
        <div className="">
            <img src="" alt="" />
            <span>Name</span>
            <span>email</span>
            <Link href="/UserPanel">
                <button>User Panel</button>
            </Link>
        </div>
    );
};

export default User;
