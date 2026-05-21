type Prop = {
    text: string
    className?: string
}

export function Title48 ({text, className}: Prop) {
    return (
        <div className={`${className} text-white text-[48px] font-[Raleway] text-center leading-none font-bold`}>{text}</div>
    )
}