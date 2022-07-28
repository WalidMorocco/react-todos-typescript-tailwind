import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import { ChangeEvent, FormEvent }  from 'react'

export type AddTodoProps = {
    task: string;
    handleSubmitTodo: (e: FormEvent) => void;
    handleChange: (e: ChangeEvent) => void;
}

export const AddTodo = ({
    task,
    handleSubmitTodo,
    handleChange,
}: AddTodoProps) => (
    <form onSubmit={handleSubmitTodo}>

        <input id="addTodoTextField"
            type="text" 
            name="task" 
            value={task} 
            onChange={handleChange} 
        />

        <button id="addTodoButton"
            type="submit" 
            aria-label="Add todo"
        >

            <PlusIcon />

        </button>
    </form>
)