
type Prop = {text: string}

export function BlueText ({text}: Prop) {
    return (
        <div className="text-[#7286FF] uppercase text-[14px] font-[Raleway] font-bold tracking-[4px] mb-7">{text}</div>
    )
}