import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { FaCamera, FaHome, FaUserCircle } from "react-icons/fa";

const mainButtons = [
    {
        text: "Login",
        style: "login-button--border xsm:w-3/4 p-2 text-xl text-center rounded-md",
        href: "/Login",
    },
    {
        text: "Continue without Login",
        style: "p-2 text-xl text-center rounded-md lg:ml-5",
        href: "/ScanPanel",
    },
];

const signupButtons = [
    {
        value: "Google",
        img: <FcGoogle />,
    },
    {
        value: "Facebook",
        img: <CgFacebook />,
    },
];

const loginButtons = [
    {
        value: " Google ",
        img: <FcGoogle size={25} />,
    },
    {
        value: " Facebook ",
        img: <CgFacebook size={25} />,
    },
];

const navbarButtons = [
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

const scanPanelButtons = [
    {
        id: 1,
        name: 'item',
        style: 'bg-item poppins'
    },
    {
        id: 2,
        name: 'bio',
        style: 'bg-bio poppins',
    },
    {
        id: 3,
        name: 'glass',
        style: 'bg-glass poppins',
    },
    {
        id: 4,
        name: 'plastic',
        style: 'bg-plastic poppins',
    },
    {
        id: 5,
        name: 'paper',
        style: 'bg-paper poppins',
    },
];

const scanBoxButtons = [
    {
        text: "Scan now",
        url: "/ScanPanel",
    },
    {
        text: "Add file",
        url: "/ScanFile",
    },
];


// zrodlem najczesciej popelnianych bledow jest https://www.czystyregion.pl/nieprawidlowa-segregacja-odpadow.html

const commonErrorsText = [
    {
        id: 1,
        title: 'Broken tableware, panes in a container for packaging glass',
        text: 'Ceramics, broken glasses, heat-resistant dishes, mirrors, light bulbs, glass, candles, armored glass should not be thrown into green containers intended for container glass. Some of them (e.g. light bulbs) are hazardous waste, which can be handed over to e.g. PSZOK. The rest have a different melting point than jars or glass bottles, which makes the recycling process difficult. Candles, luthiers, ceramics and table glass are classified as "mixed" or residual waste. '
    },
    {
        id: 2,
        title: 'Jar of mayonnaise, glass bottle of olive oil in a mixed waste container',
        text: 'This waste is packaging glass and is recyclable, in a green bag or container. The jars do not need to be washed, just empty any leftover food. '
    },
    {
        id: 3,
        title: 'Meat leftovers and litter in the "Bio" waste container',
        text: 'Only raw plant residues: peelings, grass, leaves, small branches, raw wood or sawdust can be disposed of in the biodegradable waste bin. We classify meat residues, bones, animal excrements, cat litter box litter as "mixed", residual waste. We also do not throw bread, cakes, dairy products into "BIO"'
    },
    {
        id: 4,
        title: 'Bio waste thrown away in plastic bags',
        text: 'In order for the segregation of biodegradable waste to fulfill its function, it should not be thrown in plastic bags, but directly into the container. The bags contaminate the compost that is produced from our bio-waste at the Kędzierzyn-Koźle installation. '
    },
    {
        id: 5,
        title: '"Cartons" of milk, juices and beverages thrown into "paper"',
        text: 'Packaging of the so-called multi-material, in addition to cellulose, it also contains a layer of aluminum and foil - therefore it should go to the container for plastics and metals. If we throw them in there, we can be sure that all the raw materials in this type of packaging will be recovered. '
    },
    {
        id: 6,
        title: 'Receipts in "paper"',
        text: 'The thermal paper on which the receipts or coupons are printed should not be put in the paper bin as it is not recyclable. So we throw the receipts into mixed waste. '
    },
    {
        id: 7,
        title: 'Light bulbs, batteries, accumulators, expired medicines, RTV equipment, household appliances disposed of as "mixed waste" or "plastics"',
        text: 'All this waste should be handed over either to a dedicated place in supermarkets, pharmacies or to the Selective Collection of Municipal Waste. This waste belongs to the group of hazardous waste which contains numerous substances which are harmful and poisonous to humans and the environment. '
    },
    {
        id: 8,
        title: 'construction waste thrown into mixed waste',
        text: 'Brick debris, tiles, other post-renovation waste, as well as paint and adhesive packaging should be segregated and delivered to the Municipal Waste Selective Collection Center by yourself.'
    }
]

const randomColor = [
    {
        id: 1,
        style: "bg-plastic"
    },
    {
        id: 2,
        style: "bg-bio"
    },
    {
        id: 3,
        style: "bg-item"
    },
    {
        id: 4,
        style: "bg-paper"
    },
    {
        id: 5,
        style: "bg-glass"
    }
]

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-12-12T00:00:00+00:00',
    to: '2021-12-12T23:00:00+00:00',
    title: 'BIO'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2021-12-15T00:00:00+00:00',
    to: '2021-12-15T23:00:00+00:00',
    title: 'PAPER'
}, {
    id: 3,
    color: '#3694DF',
    from: '2021-12-23T13:00:00+00:00',
    to: '2021-12-23T20:00:00+00:00',
    title: 'PLASTIC'
}];

export {
    mainButtons,
    loginButtons,
    signupButtons,
    navbarButtons,
    scanPanelButtons,
    scanBoxButtons,
    commonErrorsText,
    randomColor,
    events
};
