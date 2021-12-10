import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import UserBox from "../components/UserBox";
import ScanBox from "../components/ScanBox";
import MoneyBox from "../components/MoneyBox";
import ErrorsBox from "../components/ErrorsBox";

const Home = () => {
    const getStorageTheme = () => {
        let theme = "light-theme";
        console.log(localStorage);
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "light-theme");
        } else {
            theme = localStorage.getItem("theme");
        }
        return theme;
    };

    const [theme, setTheme] = useState(null);

    const toggleTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
        } else {
            setTheme("light-theme");
        }
    };

    useEffect(() => {
        getStorageTheme();
    }, []);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div
            className="w-screen h-screen bg-home flex"
            // ${ theme === "light-theme" ? "bg-dark" : "bg-white" }
        >
            <Navbar />
            <div className="w-screen h-screen flex">
                <div className="flex flex-col w-2/12 h-full justify-evenly z-10">
                    <UserBox />
                    <MoneyBox />
                </div>
                <div className="flex flex-col w-6/12 h-full justify-evenly z-10">
                    <ScanBox />
                    <ErrorsBox />
                </div>
                <img
                    src="/assets/comp2-waves.png"
                    alt=""
                    className="absolute w-full left-0 bottom-0 "
                />
            </div>
        </div>
    );
};

export default Home;
