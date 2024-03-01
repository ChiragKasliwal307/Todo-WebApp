import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos:[{
        id: 1,
        todo: "todo Msg",
        completed: false

    }],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id, completed)=>{}
})

export const TodoProvider = todoContext.Provider

export default function useTodo(){
    return useContext(todoContext)
}