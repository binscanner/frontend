import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import UserBox from "./components/UserBox";
import ScanBox from "./components/ScanBox";
import MoneyBox from "./components/MoneyBox";

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
            className={`w-screen h-screen ${
                theme === "light-theme" ? "bg-dark" : "bg-white"
            }`}
        >
            <Navbar />
            <div className="flex flex-wrap w-3/5 h-screen justify-evenly">
                <UserBox
                // theme={theme} toggleTheme={toggleTheme()}
                />
                <MoneyBox />
                <ScanBox />
            </div>
        </div>
    );
};

export default Home;
