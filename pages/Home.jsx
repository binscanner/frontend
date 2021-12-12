import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// import { animated, useSpring } from "react-spring";
import Wave from "react-wavify";
import Navbar from "../components/Navbar";
import UserBox from "../components/UserBox";
import ScanBox from "../components/ScanBox";
import MoneyBox from "../components/MoneyBox";
import ErrorsBox from "../components/ErrorsBox";
// import Calendar from "../components/Calendar/Monthly/Calendar";
import KUTE from "kute.js";

const CalendarBox = dynamic(() => import("../components/CalendarBox"), {
    ssr: false,
});

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
            className="w-screen h-screen bg-home flex flex-row xl:flex-col xl:relative"
            // ${ theme === "light-theme" ? "bg-dark" : "bg-white" }
        >
            <Navbar />
            <div className="w-screen h-screen flex flex-row xl:flex-col-reverse xl:justify-center xl:relative xl:bottom-8 ">
                <div className="flex flex-col w-1/5 h-full justify-evenly z-10 xl:justify-center xl:w-full xl:h-1/4 ">
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
                <label
                    htmlFor=""
                    className=" top-0 font-k2d pb-4 text-2xl w-full backdrop-blur text-white font-extrabold mobxl:hidden text-center"
                >
                    binscanner
                </label>

                {/* <svg
                        id="visual"
                        viewBox="0 0 1900 1080"
                        width="1900"
                        height="1080"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        className="absolute w-screen h-auto left-0 bottom-0 z-0 md:hidden"
                    >
                        <animated.path
                            id="layer1"
                            d="M0 869L39.7 853.3C79.3 837.7 158.7 806.3 237.8 753.5C317 700.7 396 626.3 475.2 606.7C554.3 587 633.7 622 712.8 657C792 692 871 727 950.2 682.5C1029.3 638 1108.7 514 1187.8 501.2C1267 488.3 1346 586.7 1425.2 601.8C1504.3 617 1583.7 549 1662.8 530.3C1742 511.7 1821 542.3 1860.5 557.7L1900 573L1900 1081L1860.5 1081C1821 1081 1742 1081 1662.8 1081C1583.7 1081 1504.3 1081 1425.2 1081C1346 1081 1267 1081 1187.8 1081C1108.7 1081 1029.3 1081 950.2 1081C871 1081 792 1081 712.8 1081C633.7 1081 554.3 1081 475.2 1081C396 1081 317 1081 237.8 1081C158.7 1081 79.3 1081 39.7 1081L0 1081Z"
                            fill="#258C25"
                            stroke-linecap="round"
                            stroke-linejoin="miter"
                            className="w-full"
                        />
                        <animated.path
                            id="layer2"
                            d="M0 387L39.7 435.2C79.3 483.3 158.7 579.7 237.8 596C317 612.3 396 548.7 475.2 512.5C554.3 476.3 633.7 467.7 712.8 496.3C792 525 871 591 950.2 655.3C1029.3 719.7 1108.7 782.3 1187.8 747.8C1267 713.3 1346 581.7 1425.2 565.2C1504.3 548.7 1583.7 647.3 1662.8 682.3C1742 717.3 1821 688.7 1860.5 674.3L1900 660L1900 1081L1860.5 1081C1821 1081 1742 1081 1662.8 1081C1583.7 1081 1504.3 1081 1425.2 1081C1346 1081 1267 1081 1187.8 1081C1108.7 1081 1029.3 1081 950.2 1081C871 1081 792 1081 712.8 1081C633.7 1081 554.3 1081 475.2 1081C396 1081 317 1081 237.8 1081C158.7 1081 79.3 1081 39.7 1081L0 1081Z"
                            fill="#258C25"
                            stroke-linecap="round"
                            stroke-linejoin="miter"
                            className="w-full hidden"
                        />
                        <animated.path
                            id="layer3"
                            d="M0 711L39.7 731.7C79.3 752.3 158.7 793.7 237.8 803.7C317 813.7 396 792.3 475.2 748.3C554.3 704.3 633.7 637.7 712.8 597.8C792 558 871 545 950.2 532.2C1029.3 519.3 1108.7 506.7 1187.8 508.2C1267 509.7 1346 525.3 1425.2 547C1504.3 568.7 1583.7 596.3 1662.8 617C1742 637.7 1821 651.3 1860.5 658.2L1900 665L1900 1081L1860.5 1081C1821 1081 1742 1081 1662.8 1081C1583.7 1081 1504.3 1081 1425.2 1081C1346 1081 1267 1081 1187.8 1081C1108.7 1081 1029.3 1081 950.2 1081C871 1081 792 1081 712.8 1081C633.7 1081 554.3 1081 475.2 1081C396 1081 317 1081 237.8 1081C158.7 1081 79.3 1081 39.7 1081L0 1081Z"
                            fill="#258C25"
                            stroke-linecap="round"
                            stroke-linejoin="miter"
                            className="w-screen hidden"
                        />
                    </svg> */}
            </div>
            <Wave
                fill="#258C25"
                className="absolute w-screen h-1/2 left-0 bottom-0 z-0"
                options={{
                    amplitude: 100,
                    speed: 0.1,
                    points: 4,
                }}
            />
            {/* <img
                src="/assets/comp2-waves.png"
                alt=""
                className="absolute w-full left-0 bottom-0 z-0 md:hidden"
            /> */}

            {/* <img
                src="/assets/mobile.svg"
                alt=""
                className="absolute w-full left-0 bottom-0 z-0 mobmd:hidden"
            /> */}
        </div>
    );
};

export default Home;
