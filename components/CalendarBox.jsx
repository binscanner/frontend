import React from "react";

import MyComponent from "react-awesome-calendar";
import { events } from "../data/data";

const CalendarBox = () => {
    return (
        <main className="w-full h-full flex items-center justify-center pl-2 pr-8 pt-10 pb-20 xl:p-2">
            <div className="w-full h-full off:bg-item/90 bg-white/20 backdrop-blur duration-300 rounded-xl  overflow-y-auto p-10 xl:pt-2">
                <div className="w-full text-center m-0 p-0 text-xl font-semibold">
                    Calendar
                </div>
                <div className="w-full text-center p-4 ">
                    <button>Add Event</button>
                </div>
                <MyComponent events={events} />
            </div>
        </main>
    );
};

export default CalendarBox;
