import { TodoItemType } from "@/components/todo/todo-item";
import axios from "axios";

const SERVER_URL = 'http://localhost:8000'

export const addTodoApi = async (todo: TodoItemType) => {
    try {
        let { data } = await axios.post(`${SERVER_URL}/todos`, todo);

        return true
    } catch (err) {
        console.log(err);
    }
}

export const updateTodoApi = async (todo: TodoItemType, id: number) => {
    try {
        let { data } = await axios.put(`${SERVER_URL}/todos/${id}`);

        return true
    } catch (err) {
        console.log(err);
    }
} 

export const getTodoListApi = async () => {
    try {
        let { data } = await axios.get(`${SERVER_URL}/todos`);
        return data
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const deleteTodoApi = async (id: number) => {
    try {
        let { data } = await axios.delete(`${SERVER_URL}/todos/${id}`);
        return true;
        
    } catch (err) {
        console.log(err);
    }
}