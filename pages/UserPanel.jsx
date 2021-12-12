import React from "react";
import Wave from "react-wavify";

const UserPanel = () => {
    return (
        <div className="w-screen h-screen bg-home relative">
            <div className="w-full  p-10 h-full flex flex-col xl:hidden items-center justify-center ">
                <div className="w-full h-full z-10 flex justify-center items-center flex-col rounded-xl bg-black/20  off:bg-white/20 backdrop-blur shadow-xl duration-300">
                    {/* <div
                className="absolute left-0 top-0"
                // onClick={toggleTheme()}
            >
                <BsMoonFill size={32} />
            </div> */}
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                        <img
                            src="./assets/avatar.png"
                            alt=""
                            className="w-11/12"
                        />
                    </div>
                    <p className="mt-4 text-2xl text-white font-semibold text-center">
                        Jan Kowalski
                    </p>
                    <button className="text-center bg-userProfileColor text-white text-lg p-2 m-5 rounded-xl w-36 2xl:text-sm">
                        Change name
                    </button>
                    <button className="text-center bg-red-500 text-white text-lg p-2 m-5 rounded-xl w-36 2xl:text-sm">
                        Log out
                    </button>
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
            </div>
        </div>
    );
};

export default UserPanel;
