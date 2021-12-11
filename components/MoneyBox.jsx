import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

const MoneyCounter = () => {
    const [moneyCounter, setMoneyCounter] = useState();

    const getData = async () => {
        setMoneyCounter("Coming soon");
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <main className="w-full h-1/2 flex items-center justify-center pl-8 pr-2 pt-0 pb-20 xl:w-full xl:p-2 xl:h-full">
            <div className="w-full h-full bg-moneyCounterColor/90 rounded-xl flex flex-col items-center justify-evenly xl:p-2">
                <div className="text-2xl 2xl:text-lg font-semibold text-center w-8/12 text-black">
                    Collected funds for a charity collection
                </div>
                <div className="text-3xl 2xl:text-lg font-black text-center w-10/12 text-white">
                    {moneyCounter}
                </div>
            </div>
        </main>
    );
};

export default MoneyCounter;
