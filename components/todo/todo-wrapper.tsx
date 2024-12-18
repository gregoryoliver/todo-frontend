import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode,
    numberOfDone: number,
    numberOfTotal: number
}

const TodoWrapper: FC<Props> = ({
    children,
    numberOfDone,
    numberOfTotal

}) => {
    return (
        <div className="h-full overflow-auto">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-xs gap-1">
                    <span className="text-[#4EA8DE]">Tasks</span>
                    <span className="block rounded-lg text-[#F2F2F2] text-[10px] bg-[#333333] px-2 py-0.5">{ numberOfTotal }</span>
                </div>
                <div className="flex items-center text-xs gap-1">
                    <span className="text-[#8284FA]">Completed</span>
                    <span className="block rounded-lg text-[#F2F2F2] text-[10px] bg-[#333333] px-2 py-0.5">
                        {numberOfDone}
                        <span className="mx-0.5">de</span>
                        {numberOfTotal}
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {children}
            </div>
        </div>
    )
}

export default TodoWrapper;