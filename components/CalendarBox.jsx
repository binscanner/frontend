import React from "react";

import MyComponent from "react-awesome-calendar";

const CalendarBox = () => {
    return (
        <main className="w-full h-full flex items-center justify-center pl-8 pr-2 pt-10 pb-20">
            <div className="w-full h-full bg-white/70 duration-300 rounded-xl  overflow-y-auto p-10">
                <MyComponent />
            </div>
        </main>
    );
};

export default CalendarBox;
