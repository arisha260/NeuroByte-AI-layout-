import { BlueText } from "./ui/blue-text";
import { Text20 } from "./ui/Texts/Text20";
import { Title48 } from "./ui/Titles/Title-48";
import { Points80 } from "./icons/Points80";
import { Icon1, Icon2, Icon3 } from "./icons/FeautersIcons/FeaturesIcons";


export function Features () {
    return (
        <section className="relative my-29.25">
            <div className="relative flex flex-col items-center z-50">
                <BlueText text="Features"/>
                <div className="flex items-center flex-col gap-7">
                    <Title48 text="Discover the Tools that Drive Success"/>
                    <Text20 text="Unleash innovation and accelerate growth with our dynamic product."/>
                </div>

                <div className="max-w-317 mt-12.5 mb-7 py-11.75 px-16.25 bg-[#15141D] rounded-2xl">
                    <div className="flex items-start gap-40">
                        <FeatureBlock
                            icon={Icon1}
                            title="Cutting-Edge Innovation"
                            text="Experience groundbreaking technological advancements that push the boundaries of whats possible, revolutionizing industries and transforming the way we live and work."
                            />

                        <FeatureBlock
                            icon={Icon2}
                            title="Seamess Connectivity"
                            text="Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world."
                            />

                        <FeatureBlock
                            icon={Icon3}
                            title="Intuitive User Interface"
                            text="Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity."
                            />
                    </div>
                </div>

                <div className="flex gap-6 items-center">
                    <button className="text-white py-4 px-9 bg-black rounded-[160px] border-2 border-blue-900 font-[Raleway] hover:border-blue-950 hover:text-gray-400 transition">Contact Us</button>
                    <a href="#" className="text-white text-4 font-[Inter] flex items-center gap-3 hover:text-gray-500 transition">{"View All >"}</a>
                </div>
            </div>

            <Points80 className="absolute bottom-[5%] left-[15%] z-0"/>
            <Points80 className="absolute bottom-[-20%] right-[15%] z-0 rotate-90"/>

        </section>
    )
}

type FeatureBlockProps = {
    icon: React.ElementType,
    title: string,
    text: string,
}

function FeatureBlock ({icon: Icon, title, text}: FeatureBlockProps) {

    return (
        <div className="relative flex items-center flex-col feature-block">
            <div className="mb-4"><Icon /></div>
            <div className="mb-6 text-white text-[24px] font-[Raleway] text-center">{title}</div>
            <div className="text-white text-4 font-[Manrope] text-center">{text}</div>
        </div>
    )

}
