type CheckTodoProps = {
    // Check Todo Props
    id: string
    isCompleted: boolean
    handleCheckTodo: (id: string) => void
}

// Create the CheckTodo component
export const CheckTodo  = ({
    id,
    isCompleted,
    handleCheckTodo,
}: CheckTodoProps) => {
    return (
        <div>
            <input id="checkbox"
                type="checkbox" 
                checked={isCompleted} 
                className="w-5 h-5 rounded-3xl"
                onChange={() => handleCheckTodo(id)} 
            />
        </div>
    )
}
