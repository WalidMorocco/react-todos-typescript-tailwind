// Create the type Todo and the prop
type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

type TodoProps = {
    // todo property type Todo
    todo: Todo
    // handleDeleteTodo property is a function that takes a todo and returns nothing (delete function)
    handleDeleteTodo: (id: string) => void
    handleCheckTodo: (id: string) => void
}

// Create the Row component
export const Row = ({

    // Todo prop and handleDeleteTodo function
    todo: {task, isCompleted, id },
    handleDeleteTodo, 
    handleCheckTodo,
}: TodoProps) => 
(
    <div id="todo"
        className={`
            flex w-full p-4 mb-2 justify-between items-center
            ${isCompleted ? "bg-gray-400 " : "bg-green-300"}
        `}
    >

        <p id="todoTitle"
            className={`
                ml-2 text-xl font-sans font-medium
                ${isCompleted ? "text-white line-through" : "text-gray-700"}
            `}
        >{task}</p>

        <div id="selection"
            className="w-1/6 flex justify-between items-center mr-2"
        >

            <button  id="deleteButton"
                aria-label="Delete a todo"
                className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"
                onClick={() => handleDeleteTodo(id)}
            >

                X

            </button>

            <input id="checkbox"
                type="checkbox" 
                checked={isCompleted} 
                onChange={() => handleCheckTodo(id)} 
            />

        </div>
    </div>
)