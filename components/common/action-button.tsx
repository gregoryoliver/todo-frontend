'use client'

import clsx from "clsx"
import { FC, ReactNode } from "react"

type Props = {
    label: string,
    icon: ReactNode,
    onClick?: () => void,
    className?: string
}

const ActionButton: FC<Props> = ({
    label,
    icon,
    onClick,
    className
}) => {
    return (
        <button
            className={
                clsx(
                    "w-full py-3 rounded-md text-xs text-[#F2F2F2] bg-[#1E6F9F] outline-none border-none flex justify-center items-center",
                    className
                )
            }
            onClick={onClick}
        >
            <span className="-mb-0.5">{label}</span>
            <span>{icon}</span>
        </button>
    )
}

export default ActionButton;