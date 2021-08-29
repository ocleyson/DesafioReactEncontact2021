import  React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskContext, ITask } from '../../contexts/TaskContext';
import { Container } from './styles';
import Input from '../Input';
import IconButton from '../IconButton';
import { FiChevronDown } from 'react-icons/fi';

function MainInput() {
    const [task, setTask] = useState('')
    const [areTasksDone, setAreTasksDone] = useState(false)

    const { tasks, setTasks } = useContext(TaskContext);

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") return
        
        event.preventDefault()

        setTasks([{
            id: uuidv4(),
            title: task,
            isDone: false
        }, ...tasks])

        setTask('')
        setAreTasksDone(false)
    }

    function doAllTasks() {
        const tasksDone = tasks.reduce((finalArray: ITask[], task) => {
            finalArray.push({
                ...task,
                isDone: !areTasksDone
            })

            return finalArray
        }, [])

        setTasks(tasksDone)
        setAreTasksDone(!areTasksDone)
    }

    return (
        <Container>
            <IconButton onClick={doAllTasks}>
                <FiChevronDown />
            </IconButton>

            <Input
                type="text"
                aria-label="tarefa"
                placeholder="Qual tarefa precisa ser feita?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                autoComplete="text"
                autoFocus={true}
                onKeyDown={handleKeyDown}
            />
        </Container>
    );
}

export default MainInput;
