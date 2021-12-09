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
        <main className="w-2/5 h-1/2 flex items-center justify-center p-8">
            <div className="w-full h-full bg-moneyCounterColor rounded-xl flex flex-col items-center justify-evenly">
                <div className="text-2xl font-semibold text-center w-8/12 text-white">
                    Collected funds for a charity collection
                </div>
                <div className="text-3xl font-black text-center w-10/12 text-white">
                    {moneyCounter}
                </div>
            </div>
        </main>
    );
};

export default MoneyCounter;
