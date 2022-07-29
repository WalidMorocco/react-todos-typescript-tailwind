import {DeleteTodo} from "./DeleteTodo"
import {CheckTodo} from "./CheckTodo"
// Create the type Todo 
type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

// Create TodoProp to use props with our Todo type
type TodoProps = {
    // todo property type Todo
    todo: Todo
    handleDeleteTodo: (id: string) => void
    handleCheckTodo: (id: string) => void
}

// Create the Row component
export const Card = ({
    todo: {task, isCompleted, id },
    handleDeleteTodo, 
    handleCheckTodo,
}: TodoProps) => {
    return (
        <div className={`
            flex w-full p-4 mb-2 justify-between items-center rounded-3xl shadow
            ${isCompleted ? "bg-purple-800" : "bg-purple-600"}  `}
        >

            <div className="w-40">
                <p id="todoTitle"
                    className={`
                        ml-2 text-xl font-sans font-medium
                        ${isCompleted ? "text-white line-through" : "text-white"}
                    `}
                >{task}
                </p>
            </div>
            

            <div id="selection"
                className="w-1/6 flex space-x-1 items-center"
            >
                

                <CheckTodo
                id={id}
                isCompleted={isCompleted}
                handleCheckTodo={() => handleCheckTodo(id)}

                />

                <DeleteTodo 
                id={id}
                handleDeleteTodo={() => handleDeleteTodo(id)} />
            </div>
        </div>
    )
}

