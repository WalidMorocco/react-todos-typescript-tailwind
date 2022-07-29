import {DeleteTodo} from "../DeleteTodo"
import {CheckTodo} from "../CheckTodo"
import { Todo } from "../../types/Todo";

// Create the type Todo 
interface TodoProps {
    todo: Todo;
    handleDeleteTodo: (id: string) => void
    handleCheckTodo: (id: string) => void
}

// Create the Row component
export const Card = ({todo, handleDeleteTodo, handleCheckTodo}: TodoProps) => {
    return (
        <div className={`
            flex w-full p-4 mb-2 justify-between items-center rounded-3xl shadow
            ${todo.isCompleted ? "bg-purple-800" : "bg-purple-600"}  `}
        >

            <div className="w-40">
                <p id="todoTitle"
                    className={`
                        ml-2 text-xl font-sans font-medium
                        ${todo.isCompleted ? "text-white line-through" : "text-white"}
                    `}
                >{todo.task}
                </p>
            </div>
            

            <div id="selection"
                className="w-1/6 flex space-x-1 items-center"
            >
                

                <CheckTodo
                id={todo.id}
                isCompleted={todo.isCompleted}
                handleCheckTodo={() => handleCheckTodo(todo.id)}

                />

                <DeleteTodo 
                id={todo.id}
                handleDeleteTodo={() => handleDeleteTodo(todo.id)} />
            </div>
        </div>
    )
}

