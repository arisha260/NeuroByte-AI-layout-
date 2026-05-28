type Prop = {
    text: string
    className?: string
}

export function Text20 ({text, className}: Prop) {

    return (
        <div className={`text-[20px] font-normal font-[Manrope] text-white text-center ${className} `}>{text}</div>
    )

}