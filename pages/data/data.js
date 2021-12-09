import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { FaCamera, FaHome, FaUserCircle } from "react-icons/fa";

const MainButtons = [
    {
        text: "Login",
        style: "login-button--border w-1/6 xsm:w-3/4 pt-2 pb-2 text-xl text-center rounded-md lg:w-1/5 ml-10 lg:ml-5 lg:min-w-max",
        href: "/Login",
    },
    {
        text: "Continue without Login",
        style: "w-1/6 xsm:w-3/4 pt-2 pb-2 text-xl text-center rounded-md lg:w-1/5 ml-10 lg:ml-5 lg:min-w-max",
        href: "/ScanPanel",
    },
];

const SignupButtons = [
    {
        value: "Google",
        img: <FcGoogle />,
    },
    {
        value: "Facebook",
        img: <CgFacebook />,
    },
];

const LoginButtons = [
    {
        value: " Google ",
        img: <FcGoogle size={25} />,
    },
    {
        value: " Facebook ",
        img: <CgFacebook size={25} />,
    },
];

const NavbarButtons = [
    {
        value: "Camera",
        url: "/Camera",
        img: <FaCamera size={26} />,
    },
    {
        value: "Home",
        url: "/Home",
        img: <FaHome size={26} />,
    },
    {
        value: "User",
        url: "/UserPanel",
        img: <FaUserCircle size={26} />,
    },
];

const ScanPanelButtons = [
    {
        name: 'bio',
        style: 'poppins hover:bg-bio xl:bg-bio '
    },
    {
        name: 'glass',
        style: 'poppins hover:bg-glass xl:bg-glass'
    },
    {
        name: 'plastic',
        style: 'poppins hover:bg-plastic xl:bg-plastic'
    },
    {
        name: 'paper',
        style: 'poppins hover:bg-paper xl:bg-paper'
    },
    // {
    //     name: 'ITEM',
    //     style: 'item poppins'
    // },
];

const ScanBoxButtons = [
    {
        text: 'Scan now',
        url: '/ScanPanel'
    },
    {
        text: 'Add file',
        url: '/ScanFile'
    }
]

export { MainButtons, LoginButtons, SignupButtons, NavbarButtons, ScanPanelButtons, ScanBoxButtons };
