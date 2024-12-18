'use client'

import ActionButton from "@/components/common/action-button";
import { Fragment, useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TodoWrapper from "@/components/todo/todo-wrapper";
import TodoItem from "@/components/todo/todo-item";
import Empty from "@/components/todo/empty";
import { getTodoListApi } from "@/lib/api";

const TodoList = () => {
  const handleClick = () => {
    console.log('clicked')
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
  
  return (
    <Fragment>
      <ActionButton
        label="Create Task"
        icon={<PlusCircleIcon className="w-4 h-4 ml-2" />}
        onClick={handleClick}
        className="absolute top-0 transform -translate-y-1/2"
      />
      <TodoWrapper numberOfDone={5} numberOfTotal={10}>
      {
          todoList.length ? 
            todoList.map(item => {
              return (
                <TodoItem key={item.id} title={item.title} done={item.done} />
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