import React, { useState, useEffect } from "react";
import { commonErrorsText, randomColor } from "../data/data";

const ErrorsBox = () => {
    const [randomText, setRandomText] = useState(1);
    const [colorId, setColorId] = useState(1);
    const [color, setColor] = useState();

    useEffect(() => {
        let randomNumber = Math.floor(Math.random() * 7) + 1;
        let randomColorId = Math.floor(Math.random() * 5);
        setColorId(randomColorId);
        setRandomColor();
        setRandomText(randomNumber);
    }, []);

    const setRandomColor = () => {
        randomColor.forEach((el) => {
            const { id, style } = el;

            colorId === id ? setColor(style) : console.log(style);
        });
    };

    return (
        <main className="w-3/5 h-2/3  flex items-center justify-center p-8 pt-0 pb-20 xl:hidden">
            <div className="w-full h-full bg-lastScanColor/80 flex justify-evenly items-center flex-col rounded-xl">
                <div className="text-xl font-semibold p-6 h-3/12 w-full text-center">
                    The most common errors
                </div>

                {commonErrorsText.map(({ id, title, text }, index) => {
                    return (
                        id === randomText && (
                            <div
                                className="h-9/12 w-full 2xl:w-11/12 rounded-xl flex justify-between items-center overflow-y-auto scroolbar-custom"
                                key={index}
                            >
                                <div
                                    className={`w-full h-full flex flex-col items-center  rounded-xl p-7 pt-0`}
                                >
                                    <div className="h-auto w-full text-center text-lg pb-4 pt-10 p-6  bg-glass/80 rounded-tr-xl rounded-tl-xl">
                                        {title}
                                    </div>
                                    <div className="h-auto w-full text-justify  text-md pt-0 p-6 pb-10  mb-6 bg-glass/80 rounded-br-xl rounded-bl-xl">
                                        {text}
                                    </div>
                                </div>
                            </div>
                        )
                    );
                })}
            </div>
        </main>
    );
};

export default ErrorsBox;
