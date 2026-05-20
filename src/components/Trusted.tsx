import { AliExpress } from "./icons/AliExpress";
import { Amazon } from "./icons/Amazon";
import { Apple } from "./icons/Apple";
import { Ebay } from "./icons/Ebay";
import { Etsy } from "./icons/Etsy";
import { Nike } from "./icons/Nike";
import { Samsung } from "./icons/Samsung";
import { Walmart } from "./icons/Walmart";


const Trusters = [Walmart, Amazon, AliExpress, Ebay, Apple, Samsung, Nike, Etsy, Walmart, Amazon, AliExpress, Ebay, Apple, Samsung, Nike, Etsy,];

export function Trusted () {

    return (
        <section className="relative z-10 py-10">
            <div className="flex flex-col gap-10 items-center">
                <div className="text-white text-[20px] uppercase font-normal font-[Inter] text-center">Trusted by companies in 100+ countries around the globe.</div>

                <div className="w-full bg-[#10111A] py-10 overflow-hidden flex">

                    <div className="pr-20 flex items-center gap-20 marquee-animation">

                            {Trusters.map((Icon, index) =>
                                <div key={index} className="shrink-0">
                                    {<Icon />}
                                </div>
                            )}

                    </div>

                    <div aria-hidden className="pr-20 flex items-center gap-20 marquee-animation">

                            {Trusters.map((Icon, index) =>
                                <div key={index} className="shrink-0">
                                    {<Icon />}
                                </div>
                            )}

                    </div>
                </div>
            </div>
        </section>
    )
}