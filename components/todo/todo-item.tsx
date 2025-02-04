import { FC } from "react"
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";


export type TodoItemType = {
    color: string,
    title: string,
    done: boolean,
}

type TodoAction = {
    id: number,
    onCheck?: (id: number) => void
    onDelete?: (id: number) => void,
    onClick?: (id: number) => void
}

type Props = TodoItemType & TodoAction;

const TodoItem: FC<Props> = ({
    id,
    color = "#F2F2F2",
    title,
    done = false,
    onClick,
    onCheck,
    onDelete
}) => {
    return (
        <div className="p-4 rounded-md flex bg-[#262626] gap-4">
            <div className="cursor-pointer" onClick={() => onCheck({title, color, done: !done}, id)}>
                {
                    done ?
                        <CheckCircleIcon className="w-4 h-4 text-[#5E60CE]" />
                        :
                        <div className="block w-4 h-4 rounded-full border-2 border-[#4EA8DE]"></div>
                }
            </div>
            <p
                className={clsx(
                    `flex-1 text-xs cursor-pointer`,
                    done && 'text-[#808080] line-through'
                )}
                style={{color: !done ? color : ''}}
                onClick={() => onClick(id)}
            >
                {title}
            </p>
            <span className="cursor-pointer" onClick={() => onDelete(id)}>
                <TrashIcon className="block w-4 h-4 text-[#F2F2F2]" />
            </span>
        </div>
    )
}

export default TodoItem;