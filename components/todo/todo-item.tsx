import { FC } from "react"
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";


export type TodoItemProps = {
    color: string,
    title: string,
    done: number,
    onCheck?: (id: number) => void
    onDelete?: (id: number) => void,
    onClick?: () => void
}

const TodoItem: FC<TodoItemProps> = ({
    color = "#F2F2F2",
    title,
    done = false,
    onClick,
    onCheck,
    onDelete
}) => {
    return (
        <div className="p-4 rounded-md flex bg-[#262626] gap-4">
            <div className="cursor-pointer" onClick={onCheck}>
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
                    done ? 'text-[#808080] line-through' : `text-[${color}]`
                )}
                onClick={onClick}
            >
                {title}
            </p>
            <span className="cursor-pointer" onClick={onDelete}>
                <TrashIcon className="block w-4 h-4 text-[#F2F2F2]" />
            </span>
        </div>
    )
}

export default TodoItem;