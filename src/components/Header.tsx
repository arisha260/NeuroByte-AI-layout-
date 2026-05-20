


export function Header () {
    return (
        <header className="w-full pt-7.5 pb-7.5 backdrop-blur-[27px] absolute">
            <div className="max-w-6xl flex justify-between items-center mx-auto">
                <div className="text-[25.2px] font-[Rubik] font-bold text-white">NeuroByte AI</div>
                <div>
                    <nav>
                        <ul className="flex gap-10 font-[Inter]">
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">Home</li>
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">About</li>
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">Features</li>
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">Pricing</li>
                            <li className="text-gray-500 hover:text-white transition cursor-pointer">Blog</li>
                        </ul>
                    </nav>
                </div>

                <button className="text-white py-3.5 px-7.5 bg-black rounded-[160px] border-2 border-blue-900 font-[Raleway] hover:border-blue-950 hover:text-gray-400 transition">Book a Demo</button>
            </div>
        </header>
    )
}