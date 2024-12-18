'use client'

import ActionButton from "@/components/common/action-button";
import { Fragment, useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TodoWrapper from "@/components/todo/todo-wrapper";
import TodoItem from "@/components/todo/todo-item";
import Empty from "@/components/todo/empty";
import { deleteTodoApi, getTodoListApi, updateTodoApi } from "@/lib/api";
import { useRouter } from "next/navigation";
import toastr from "toastr";

const TodoList = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/add"); 
  }

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoList = async () => {
      // Your asynchronous code here
      let data = await getTodoListApi();
      setTodoList(data);
    };

    fetchTodoList().catch((error) => {
      console.error('Error:', error);
    });
  }, [])

  const doneList = todoList.filter(item => item.done);

  const handleUpdate = async (updatedTodo, id) => {
    const status = await updateTodoApi(updatedTodo, id);

    if (status) {
      setTodoList(todoList.map(item => item.id === id ? { ...updatedTodo, id } : item));
    }
  }

  const handleDelete = async (id: number) => {
    const status = await deleteTodoApi(id);

    if (status) {
      setTodoList(todoList.filter(item => item.id !== id));
      toastr.success("Successfully deleted.");
    }
  }

  const handleEdit = (id: number) => {
    router.push(`/edit/${id}`);
  }
  
  return (
    <Fragment>
      <ActionButton
        label="Create Task"
        icon={<PlusCircleIcon className="w-4 h-4 ml-2" />}
        onClick={handleClick}
        className="absolute top-0 transform -translate-y-1/2"
      />
      <TodoWrapper numberOfDone={doneList.length} numberOfTotal={todoList.length}>
      {
          todoList.length ? 
            todoList.map((item, key) => {
              return (
                <TodoItem key={key} id={item.id} title={item.title} done={item.done} color={item.color} onCheck={handleUpdate} onDelete={handleDelete} onClick={handleEdit}/>
              )
            })    
            :
            <Empty />
      }
      </TodoWrapper>
    </Fragment>
  )
}

export default TodoList;