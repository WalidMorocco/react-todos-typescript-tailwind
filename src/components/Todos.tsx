import { ChangeEvent, FormEvent, useState } from "react"
import {Row} from "./Row"
import { data } from "../todos"
import { uuid } from 'uuidv4';
import { AddTodo } from "./AddTodo";
import { v4 as uuidv4 } from "uuid"

// Create type here to manipulate the todos (delete) and use useState
type Todo = {
    id: string;
    task: string;
    isCompleted: boolean;
}

// Create Todos component to link the data in todos.ts to the Row component
export const Todos = () => {
    // Use state taking as a type the Todo type created as an array and taking the data of todos.ts as a value 
    const [todos, setTodos] = useState<Todo[]>(data);
    const [task, setTask] = useState("");
    const todosLength = todos.length;
    const hasTodos = todos.length > 0;
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos);
        setTask("");
    }

    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        setTask(value);
    }

    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault();

        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false
        }
        task && handleAddTodo(todo);
    }

    // Todo taking the value from the delete function
    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    // Todo taking the value from the check function
    const handleCheckTodo = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return{
                    // Display the todo and switch the isCompleted property
                    ... todo,
                    isCompleted: !todo.isCompleted,
                }
            }
            return todo;
        })
        setTodos(updatedTodos);
    }


    return (
        <section >
            <AddTodo 
                task={task}
                handleChange={handleChange} 
                handleSubmitTodo={handleSubmitTodo}
            />
            
            {todos.map((todo) => (
                // Create row for each todo item
                <Row 
                    key={todo.id} 
                    todo={todo} 
                    handleDeleteTodo={handleDeleteTodo} 
                    handleCheckTodo={handleCheckTodo}
                />
            ))}

             {/* A ternary operator. If hasTodos is true, it will display the paragraph. If it is false,
            it will not display the paragraph.  */}
            {hasTodos && (
                <p>
                    [{remainingTodos} of {todosLength}] todos remaining
                </p>
            )}
        </section>
    )
}