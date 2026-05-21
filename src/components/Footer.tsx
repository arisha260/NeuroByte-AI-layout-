type FooterLink = {
  name: string
  link: string
}

const FooterData1: FooterLink[] = [
    {name: 'About us', link: "#"},
    {name: 'Contact us', link: "#"},
    {name: 'Careers', link: "#"},
    {name: 'Press', link: "#"},
]

const FooterData2: FooterLink[] = [
    {name: 'Features', link: "#"},
    {name: 'Pricing', link: "#"},
    {name: 'News', link: "#"},
    {name: 'Help desk', link: "#"},
    {name: 'Support', link: "#"},
]

const FooterData3: FooterLink[] = [
    {name: 'Digital Marketing', link: "#"},
    {name: 'Content Writing', link: "#"},
    {name: 'SEO for Business', link: "#"},
    {name: 'UI Design', link: "#"},
]

const FooterData4: FooterLink[] = [
    {name: 'Privacy Policy', link: "#"},
    {name: 'Terms & Conditions', link: "#"},
    {name: 'Return Policy', link: "#"},
]


export function Footer () {

    return (

        <footer className="bg-[#1E1C26] py-25 mx-auto">
            <div className="mx-auto max-w-300 grid grid-cols-6 gap-10">
                <div className="flex flex-col gap-7 col-span-1">
                    <div className="text-[25.2px] font-[Rubik] font-bold text-white">NeuroByte AI</div>
                    <p className="text-white text-[14px] opacity-[0.65] font-[Raleway]">
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                    <ul className="flex items-center gap-4">
                        <li>
                            <svg className="hover:fill-red-600 transition" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="#7D818D">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3 1.56572C14.7263 1.84407 14.1206 2.01804 13.4831 2.12242C14.1206 1.7049 14.6306 1.04381 14.8538 0.243557C14.2481 0.626289 13.5788 0.904639 12.8456 1.07861C12.2719 0.417526 11.4431 0 10.5506 0C8.82938 0 7.42688 1.53093 7.42688 3.40979C7.42688 3.68814 7.45875 3.9317 7.5225 4.17526C4.94063 4.03608 2.61375 2.67912 1.05188 0.591495C0.796875 1.1134 0.6375 1.6701 0.6375 2.29639C0.6375 3.47938 1.17938 4.5232 2.04 5.14948C1.53 5.11469 1.05187 4.97552 0.605625 4.73196V4.76675C0.605625 6.43686 1.68938 7.82861 3.12375 8.14175C2.86875 8.21134 2.58188 8.24613 2.295 8.24613C2.10375 8.24613 1.88063 8.21134 1.68938 8.17655C2.10375 9.5335 3.25125 10.5425 4.62187 10.5425C3.53813 11.4472 2.19938 12.0039 0.733125 12.0039C0.478125 12.0039 0.223125 12.0039 0 11.9691C1.4025 12.9433 3.02813 13.5 4.81313 13.5C10.5825 13.5 13.7381 8.28093 13.7381 3.75773C13.7381 3.61856 13.7381 3.44459 13.7381 3.30541C14.3438 2.85309 14.8856 2.2616 15.3 1.56572Z" />
                            </svg>
                        </li>
                        <li>
                            <svg className="hover:fill-red-600 transition" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#7D818D">
                                <path d="M15.525 0H0.675C0.302208 0 0 0.302208 0 0.675V15.525C0 15.8978 0.302208 16.2 0.675 16.2H8.65292V9.92652H6.54176V7.48161H8.65292V5.67857C8.65292 3.58614 9.9309 2.44678 11.7975 2.44678C12.6916 2.44678 13.46 2.51335 13.684 2.5431V4.72981L12.3894 4.73039C11.3743 4.73039 11.1777 5.21278 11.1777 5.92065V7.48161H13.5987L13.2835 9.92652H11.1777V16.2H15.525C15.8978 16.2 16.2 15.8978 16.2 15.525V0.675C16.2 0.302208 15.8978 0 15.525 0Z"/>
                            </svg>
                        </li>
                        <li>
                            <svg className="hover:fill-red-600 transition" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#7D818D" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>
                        </li>
                        <li>
                            <svg className="hover:fill-red-600 transition" width="17" height="17" viewBox="0 0 17 17" fill="#7D818D" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.675 0H15.525C15.8963 0 16.2 0.30375 16.2 0.675V15.525C16.2 15.8963 15.8963 16.2 15.525 16.2H0.675C0.30375 16.2 0 15.8963 0 15.525V0.675C0 0.30375 0.30375 0 0.675 0ZM2.39624 13.8038H4.79249V6.075H2.39624V13.8038ZM3.61124 5.02871C2.83499 5.02871 2.22749 4.42121 2.22749 3.64496C2.22749 2.86871 2.83499 2.26121 3.61124 2.26121C4.38749 2.26121 4.99499 2.86871 4.99499 3.64496C4.99499 4.38746 4.38749 5.02871 3.61124 5.02871ZM11.4074 13.8038H13.7699V9.55127C13.7699 7.45877 13.3311 5.87252 10.9011 5.87252C9.75361 5.87252 8.94361 6.51377 8.63986 7.12127H8.60611V6.07502H6.31111V13.8038H8.70736V9.99002C8.70736 8.97752 8.90986 7.99877 10.1586 7.99877C11.4074 7.99877 11.4074 9.14627 11.4074 10.0575V13.8038Z" />
                            </svg>
                        </li>
                    </ul>
                </div>


                <div className="col-start-3 col-span-4 grid grid-cols-4 gap-10">
                    <FooterNavs title="Company"  links={FooterData1}/>
                    <FooterNavs title="Product"  links={FooterData2}/>
                    <FooterNavs title="Services" links={FooterData3}/>
                    <FooterNavs title="Legal"    links={FooterData4}/>
                </div>

            </div>
        </footer>

    )

}

type FooterNavsProps = {
    title: string,
    links: FooterLink[]
}


function FooterNavs ({title, links}: FooterNavsProps) {

    return (
        <div className="flex flex-col gap-4.5">
            <div className="text-white text-[14px] opacity-[0.65] font-[Raleway]">{title}</div>

            <ul className="flex flex-col items-start gap-3">
                {links.map((item) =>
                    <li className="text-white text-4 font-[Raleway] hover:text-gray-600 transition" key={item.name}><a href={item.link}>{item.name}</a></li>
                )}
            </ul>
        </div>
    )

}