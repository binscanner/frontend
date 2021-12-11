import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import UserBox from "../components/UserBox";
import ScanBox from "../components/ScanBox";
import MoneyBox from "../components/MoneyBox";
import ErrorsBox from "../components/ErrorsBox";
// import Calendar from "../components/Calendar/Monthly/Calendar";
import CalendarBox from "../components/CalendarBox";

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
            className="w-screen h-screen bg-home flex flex-row xl:flex-col"
            // ${ theme === "light-theme" ? "bg-dark" : "bg-white" }
        >
            <Navbar />
            <div className="w-screen h-screen flex flex-row xl:flex-col-reverse xl:justify-end ">
                <div className="flex flex-col w-1/5 h-full justify-evenly z-10 xl:justify-center xl:w-full xl:h-1/4">
                    <UserBox />
                    <MoneyBox />
                </div>
                <div className="flex flex-col w-2/5  h-full justify-evenly z-10 xl:w-full xl:h-1/4 xl:justify-center ">
                    <ScanBox />
                    <ErrorsBox />
                </div>
                <div className="flex flex-col w-2/5  h-full justify-evenly z-10 xl:w-full xl:h-1/3 xl:justify-center">
                    <CalendarBox />
                </div>

                <img
                    src="/assets/comp2-waves.png"
                    alt=""
                    className="absolute w-full left-0 bottom-0 z-0 md:hidden"
                />
                <img
                    src="/assets/mobile.svg"
                    alt=""
                    className="absolute w-full left-0 bottom-0 z-0 mobmd:hidden"
                />
            </div>
        </div>
    );
};

export default Home;
