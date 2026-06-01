import { useState } from "react";



export function Header () {

    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <header className="w-full pt-7.5 pb-7.5 px-4 backdrop-blur-[27px] absolute z-50">
            <div className="relative max-w-6xl flex items-center justify-between gap-5 mx-auto">
                <div className="text-[25.2px] font-[Rubik] font-bold text-white order-0">NeuroByte AI</div>
                <div className={`absolute w-screen h-screen p-10 -top-10 -left-4 ${burgerStatus ? "translate-x-0" : "translate-x-[150%]"} bg-[#1E1C26] md:relative md:w-auto md:h-auto md:top-0 md:left-0 md:bg-transparent md:p-0 md:translate-x-0 mx-auto order-1 z-0 transition`}>
                    <nav>
                        <ul className="flex flex-col md:flex-row gap-5 lg:gap-10 font-[Inter]">
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">Home</li>
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">About</li>
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">Features</li>
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">Pricing</li>
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">Blog</li>
                            <button className="md:hidden text-white order-2 py-3.5 px-7.5 bg-black rounded-[160px] border-2 border-blue-900 font-[Raleway] hover:border-blue-950 hover:text-gray-400 transition">Book a Demo</button>
                        </ul>
                    </nav>
                </div>

                <button className="hidden md:block max-w-50 text-white order-2 py-3.5 px-7.5 bg-black rounded-[160px] border-2 border-blue-900 font-[Raleway] hover:border-blue-950 hover:text-gray-400 transition">Book a Demo</button>
                <div className="relative w-10 h-4 cursor-pointer md:hidden order-4 z-50" onClick={() => setBurgerStatus(!burgerStatus)}>
                    <div className={`${burgerStatus ? "rotate-50 top-2 " : "top-0"} absolute w-full h-1 bg-[#7286FF] rounded-2xl transition`}></div>
                    <div className={`${burgerStatus ? "-rotate-50 bottom-1 " : "bottom-0"} absolute w-full h-1 bg-[#7286FF] rounded-2xl transition`}></div>
                </div>
            </div>
        </header>
    )
}