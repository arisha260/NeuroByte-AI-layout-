import { Text20 } from "./ui/Texts/Text20";
import { Title48 } from "./ui/Titles/Title-48";



export function ClientsSay () {
    return (
        <section className="relative py-17.5">
            <div className="relative flex items-center justify-center flex-col gap-15">
                <div className="max-w-160 flex items-center flex-col gap-7">
                    <Title48 text="What our clients say"/>
                    <Text20 text="Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis urna sapien."/>
                </div>

                <div className="max-w-300 flex items-center gap-18">

                    <ClientsSayCard src="/avatar-1.png" name="Cameron Williamson" profession="Web Designer" descr="Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus. "/>
                    <ClientsSayCard src="/avatar-2.png" name="Esther Howard" profession="Web Developer" descr="t viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus"/>
                    <ClientsSayCard src="/avatar-3.png" name="Jenny Wilson" profession="UI/UX Designer" descr="Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec."/>

                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 border border-[#282D45] bg-[#15141D] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12L5 12" stroke="#282D45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 19L5 12L12 5" stroke="#282D45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button className="p-2 border border-[#282D45] bg-[#15141D] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

type CardProps = {
    src: string,
    name: string,
    profession: string,
    descr: string
}


function ClientsSayCard ({src, name, profession, descr}: CardProps) {
    return (
        <div className="relative client-card">
            <div className="relative max-w-86 h-auto p-6.25 flex flex-col gap-6.25 border border-[#282D45] bg-[#15141D] rounded-xl z-50">
                <div className="flex justify-between font-[Inter]">
                    <img src={src} alt="client avatar" width={40} height={40}/>
                    <div className="flex flex-col">
                        <div className="text-white text-4">{name}</div>
                        <div className="text-[#8F9BB7] text-3">{profession}</div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="41" viewBox="0 0 57 41" fill="none">
                            <path d="M25.0283 15.6342C25.0283 6.06226 19.5382 0 11.949 0C4.84419 0 0 4.94553 0 11.965C0 18.9844 4.68272 22.9728 10.4958 22.9728C12.272 22.9728 13.7252 22.6537 15.017 22.1751C15.017 27.7588 10.0113 32.0661 3.06799 33.3424V41C15.9858 39.4047 25.0283 29.035 25.0283 15.6342ZM57 15.6342C57 6.06226 51.5099 0 43.9207 0C36.8159 0 31.9717 4.94553 31.9717 11.965C31.9717 18.9844 36.4929 22.9728 42.306 22.9728C44.0822 22.9728 45.5354 22.6537 46.8272 22.1751C46.8272 27.7588 41.983 32.0661 35.0397 33.3424V41C47.9575 39.4047 57 29.035 57 15.6342Z" fill="white" fillOpacity="0.16"/>
                        </svg>
                    </div>
                </div>

                <div className="text-white text-4">{descr}</div>
            </div>

            <div className="client-card-bg absolute -bottom-6.25 -left-6.25 w-98 h-27.5 border border-[#282D45] rounded-xl bg-linear-to-r from-fuchsia-950 to-emerald-800 blur-xs z-0"></div>
        </div>
    )
}