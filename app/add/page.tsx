"use client"

import ActionButton from "@/components/common/action-button";
import ColorPanel from "@/components/common/color-panel";
import CustomInput from "@/components/common/custom-input";
import { addTodoApi } from "@/lib/api";
import { ArrowLeftIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

import toastr from "toastr";

const TodoItemAdd = () => {

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = async () => {
        if (title) {
            const todo = {
                title: title,
                color: color,
                done: false
            }
    
            const status = await addTodoApi(todo);
    
            if (status) {
                toastr.success("Successfully added.")
            }
        } else {
            toastr.warning("Please input title of todo.")
        }
    }

    return (
        <div className="">
            <div className="mb-8">
                <Link href={"/"}>
                    <span>
                        <ArrowLeftIcon className="h-4 w-4 text-white" />
                    </span>
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <CustomInput
                    placeholder="Ex. Brush you teeth"
                    label="Title"
                    value={title}
                    onChange={setTitle}
                />
                <ColorPanel onChange={setColor} value={color} />
            </div>
            <ActionButton label="Add Task" icon={<PlusCircleIcon className="h-4 w-4" />} className="mt-8" onClick={handleSubmit} />
        </div>
    )
}

export default TodoItemAdd;