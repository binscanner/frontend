import React from "react";

import Navbar from "./components/Navbar";
import User from "./components/User";

const Home = () => {
    return (
        <div className="w-screen h-screen">
            <Navbar />
            <div className="mobmd:flex mobmd:flex-col w-2/3">
                <User />
            </div>
        </div>
    );
};

export default Home;
