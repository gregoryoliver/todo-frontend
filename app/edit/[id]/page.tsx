"use client"

import ActionButton from "@/components/common/action-button";
import ColorPanel from "@/components/common/color-panel";
import CustomInput from "@/components/common/custom-input";
import { getTodoApi, updateTodoApi } from "@/lib/api";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toastr from "toastr";

const TodoItemEdit = () => {
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedColor, setUpdatedColor] = useState("");
    const [done, setDone] = useState(false);

    const params = useParams();

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getTodoApi(Number(params.id));

            setUpdatedTitle(data.title);
            setUpdatedColor(data.color);
            setDone(data.done);
        }

        fetchTodo().catch((error) => {
            console.error('Error:', error);
        });
    }, [])

    const handleSubmit = async () => {
        const todo = {
            title: updatedTitle,
            color: updatedColor,
            done
        }

        console.log(todo);
        

        const status = await updateTodoApi(todo, params.id);

        if (status) {
            toastr.success("Successfully updated.");
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
                    value={updatedTitle}
                    onChange={setUpdatedTitle}
                />
                <ColorPanel value={updatedColor} onChange={setUpdatedColor} />
            </div>
            <ActionButton label="Save" icon={<CheckIcon className="h-4 w-4" />} className="mt-8" onClick={handleSubmit}/>
        </div>
    )
}

export default TodoItemEdit;