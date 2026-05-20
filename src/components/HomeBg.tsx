


export function HomeBg () {
    return (
        <div className="w-full absolute top-0 left-0 z-0 h-252.25">
            <img src="/home-bg.png"
                className="w-full h-full object-cover" alt="home section bg" />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* fade bottom */}
            <div className="absolute bottom-0 left-0 w-full h-80 bg-linear-to-b from-transparent to-[#1E1C26]"></div>
        </div>
    )
}