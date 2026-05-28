import { FaceBook } from "./icons/FacebookIcon";
import { LinledinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Text20 } from "./ui/Texts/Text20";
import { Title48 } from "./ui/Titles/Title-48";
import { teamMembers } from "../data/OurTeamData"
import { useOurTeam } from "../hooks/useOurTeam";


export function OurTeam () {

    const {
        activeIndex,
        nextSlide,
        prevSlide,
        getPosition,
        xMap,
        scaleMap,
        zIndexMap,
    } = useOurTeam()

    return (
        <section className="relative pt-43 pb-35.25">

            <div className="relative flex flex-col gap-12.5 items-center">

                <div className="max-w-160 flex items-center flex-col gap-7">
                    <Title48 text="Meet our team"/>
                    <Text20 text="Meet our passionate and talented team, committed to delivering exceptional results, driving innovation, and transforming your vision into reality."/>
                </div>


                <div className="w-full flex flex-col items-center gap-8">


                    {/* Card with employers info */}
                    <div className="employers-info w-full h-66.25 max-w-225 p-7.5 flex flex-col items-center bg-[#15141D] rounded-4xl text-4 text-center z-50">

                        <div className="text-white max-w-171 font-[Raleway] pb-7.5">
                            {teamMembers[activeIndex].description}
                        </div>

                        <div className="mt-auto text-[#7286FF] font-bold pb-2.5">{teamMembers[activeIndex].name}</div>
                        <div className="text-[#7A7D9C] font-[Inter] pb-2.5">{teamMembers[activeIndex].role}</div>
                        <div className="flex items-center gap-5">

                            <TwitterIcon />
                            <FaceBook />
                            <LinledinIcon />

                        </div>
                    </div>

                    {/* swiper */}
                    <div className="py-4.5 w-full max-w-292">
                        <div className="relative w-full h-79 flex items-center overflow-hidden transition duration-500 ease-out">

                            {teamMembers.map((member, index) => {
                                const position = getPosition(index)
                                const transformX = xMap[position]
                                const scale = scaleMap[Math.abs(position)]
                                const zIndex = zIndexMap[Math.abs(position)]

                                return <TeamateCard key={member.id} src={member.image} position={transformX} scale={scale} zIndex={zIndex}/>
                            })}

                        </div>
                    </div>

                    {/* buttons */}
                    <div className="flex items-center gap-4">
                    <button
                        className={`p-2 border text-white border-[#282D45] bg-[#15141D] rounded-lg hover:border-gray-500 transitio`}
                        onClick={prevSlide}>
                        <svg className="hover:stroke-gray-500 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button
                    className={`p-2 border text-white border-[#282D45] bg-[#15141D] rounded-lg hover:border-gray-500 transition`}
                    onClick={nextSlide}>
                        <svg className="hover:stroke-gray-500 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                </div>

            </div>

        </section>
    )
}

type TeamateCardProps = {
    src: string;
    position: number;
    scale: number;
    zIndex: number;
}

function TeamateCard ({src, position, scale, zIndex}: TeamateCardProps) {
    return (
        <div
        style={{
            transform:
                `translate(-50%, -50%)
                translateX(${position}px)
                scale(${scale})`,
            zIndex: `${zIndex}`
            }}
        className="absolute left-1/2 top-1/2 w-78.75 h-78.75 border rounded-full border-white shrink-0 overflow-hidden transition">
            <img src={src} alt="teamate " />
        </div>
    )
}