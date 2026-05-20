


export function Home () {
    return(
        <section className="relative h-screen z-10">
            <div className="max-w-250 h-full mx-auto flex items-center justify-center flex-col gap-7">
                <div className="flex flex-col gap-0 text-[58px] text-white font-[Raleway] text-center font-bold leading-none">
                    <div>Unlock AI-Powered Insights to Drive</div>
                    <div className="bg-linear-to-r from-[#7186FF] to-[#FE7587] bg-clip-text text-transparent">Business Decisions Today</div>
                </div>

                <div className="text-[20px] text-center text-white font-[Raleway] font-normal">Transform your data into actionable intelligence with our AI-driven SaaS, designed to optimize efficiency, automate workflows, and provide predictive insights for informed decision-making. </div>

                <div className="flex items-center gap-7">
                    <button className="text-white py-4 px-9 bg-black rounded-[160px] border-2 border-blue-900 font-[Raleway] hover:border-blue-950 hover:text-gray-400 transition">Book a Demo</button>
                    <button className="text-white py-4 px-9 bg-black rounded-[160px] border-2 border-blue-900 font-[Raleway] hover:border-blue-950 hover:text-gray-400 transition">Take Product Tour ▶</button>
                </div>
            </div>
        </section>
    )
}