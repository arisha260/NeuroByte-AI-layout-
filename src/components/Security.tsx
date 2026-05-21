import { BigPoints } from "./icons/BigPoints";
import { BlueText } from "./ui/blue-text";
import { Text20 } from "./ui/Texts/Text20";
import { Title48 } from "./ui/Titles/Title-48";



export function Security () {
    return (

        <section className="relative py-25 section-end-line">
            <div className="relative flex items-center justify-center gap-35 z-50">

                <div>
                    <img src="/security-image.png" alt="integrations section image" />
                </div>

                <div className="max-w-lg flex flex-col items-start">
                    <BlueText text="Security"/>
                    <div className="flex flex-col gap-7 mb-10">
                        <Title48 text="Built for scale and enterprise level security" className="text-start"/>
                        <Text20 text="SOC-2 Type II certification, penetration tested, and regular vulnerability scans. Hosted behind a VPC. Data encryption at rest and transit." className="text-start"/>
                    </div>
                    <button className="text-white py-4 px-9 bg-black rounded-[160px] border-2 border-blue-900 font-[Raleway] hover:border-blue-950 hover:text-gray-400 transition">Learn More</button>
                </div>

            </div>

            <BigPoints className="absolute left-[-1%] top-[50%] translate-y-[-50%] z-0"/>
        </section>

    )
}