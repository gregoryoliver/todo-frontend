"use client"

import { FC } from "react"

type Props = {
    label: string,
    placeholder: string,
    value: string,
    onChange?: (title: string) => void,
}

const CustomInput: FC<Props> = ({
    label,
    placeholder = "",
    value = "",
    onChange
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={label}
                className="text-[#4EA8DE] text-xs font-semibold"
            >
                {label}
            </label>
            <input
                className="outline-none text-xs rounded-md border border-[#333333] bg-[#262626] text-[#333333] px-3 py-3"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}

export default CustomInput;