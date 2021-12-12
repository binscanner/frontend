import React from "react";

import MyComponent from "react-awesome-calendar";
import { events } from "../data/data";

const CalendarBox = () => {
    return (
        <main className="w-full h-full flex items-center justify-center pl-2 pr-8 pt-10 pb-20">
            <div className="w-full h-full bg-item/90 duration-300 rounded-xl  overflow-y-auto p-10">
                <div className="w-full text-center mb-4">
                    <button>Add Event</button>
                </div>
                <MyComponent events={events} />
            </div>
        </main>
    );
};

export default CalendarBox;
