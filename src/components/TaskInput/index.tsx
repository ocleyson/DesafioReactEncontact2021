import React, { useState, useContext } from 'react';
import { ITask, TaskContext } from '../../contexts/TaskContext';
import { FiX } from 'react-icons/fi';
import Input from '../Input';
import { TaskText, Checkbox, DeleteButton } from './styles'

type Props = {
    task: ITask
}

function TaskInput({ task }: Props) {
    const [readOnly, setReadOnly] = useState(true);
    const [updatedTask, setUpdatedTask] = useState(task)

    const { tasks, setTasks } = useContext(TaskContext)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const type = event.target.type

        if (type === 'checkbox') {
            const checked = event.target.checked

            const taskToUpdate = {
                ...updatedTask,
                isDone: checked
            }

            setUpdatedTask(taskToUpdate)

            updateTask(taskToUpdate)
        } else {
            const value = event.target.value

            setUpdatedTask({
                ...updatedTask,
                title: value
            })
        }
    }

    function updateTask(taskToUpdate: ITask) {
        const taskIndex = tasks.findIndex((obj) => obj.id === taskToUpdate.id)

        setTasks([...tasks.slice(0, taskIndex), taskToUpdate, ...tasks.slice(taskIndex + 1)])
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") return
        
        event.preventDefault()

        updateTask(updatedTask)

        setReadOnly(true)
    }

    function updateOnBlur() {
        updateTask(updatedTask)

        setReadOnly(true)
    }

    function removeTask(taskId: string) {
        const taskIndex = tasks.findIndex((obj) => obj.id === taskId)

        setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)])
    }

    function doubleClick() {
        setReadOnly(false)
        setUpdatedTask(task)
    }

    return (
        <>
            {readOnly
                && 
                    <>
                        <Checkbox
                            className="toggle"
                            type="checkbox"
                            checked={task.isDone}
                            onChange={(e) => handleChange(e)}
                        />

                        <TaskText as="p" onDoubleClick={() => doubleClick()}>
                            {task.title}
                        </TaskText>

                        <DeleteButton onClick={() => removeTask(updatedTask.id)}>
                            <FiX />
                        </DeleteButton>
                    </>
            }

            {!readOnly
                &&
                    <Input
                        type="text"
                        aria-label="tarefa"
                        placeholder="Qual tarefa precisa ser feita?"
                        value={updatedTask.title}
                        onChange={(e) => handleChange(e)}
                        autoComplete="text"
                        autoFocus={true}
                        onKeyDown={handleKeyDown}
                        onBlur={updateOnBlur}
                    />
            }
        </>
    );
}

export default TaskInput;
