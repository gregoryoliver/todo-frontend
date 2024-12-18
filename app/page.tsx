'use client'

import ActionButton from "@/components/common/action-button";
import { Fragment } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TodoWrapper from "@/components/todo/todo-wrapper";
import TodoItem from "@/components/todo/todo-item";
import Empty from "@/components/todo/empty";

const TodoList = () => {
  const handleClick = () => {
    console.log('clicked')
  }
  
  return (
    <Fragment>
      <ActionButton
        label="Create Task"
        icon={<PlusCircleIcon className="w-4 h-4 ml-2" />}
        onClick={handleClick}
        className="absolute top-0 transform -translate-y-1/2"
      />
      <TodoWrapper numberOfDone={5} numberOfTotal={10}>
        {/* <TodoItem title="Aurora is great" />
        <TodoItem title="Aurora is great" />
        <TodoItem title="Aurora is great" />
        <TodoItem title="Aurora is great" /> */}
        {/* <Empty /> */}
      </TodoWrapper>
    </Fragment>
  )
}

export default TodoList;