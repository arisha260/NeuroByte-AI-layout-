import { BlueText } from "./ui/blue-text";
import { Text20 } from "./ui/Texts/Text20";
import { Title48 } from "./ui/Titles/Title-48";



export function Integrations () {
    return (
        <section className="relative py-25 section-end-line">
            <div className="relative flex items-center justify-center gap-20">
                <div className="max-w-lg flex flex-col items-start">
                    <BlueText text="INTEGRATIONS"/>
                    <div className="flex flex-col gap-7 mb-10">
                        <Title48 text="Unified view of your customers" className="text-start"/>
                        <Text20 text="Enterpret will integrate directly with any feedback channel.
                                        Take advantage of our CSV importer or API" className="text-start"/>
                    </div>
                    <button className="text-white py-4 px-9 bg-black rounded-[160px] border-2 border-blue-900 font-[Raleway] hover:border-blue-950 hover:text-gray-400 transition">View all Integrations</button>
                </div>

                <div>
                    <img src="/integrations-image.png" alt="integrations section image" />
                </div>
            </div>
        </section>
    )
}