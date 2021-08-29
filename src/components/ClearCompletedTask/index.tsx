import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import { Button } from './styles'

function ClearCompletedTask() {

    const { tasks, setTasks } = useContext(TaskContext)

    function clear() {
        const cleanTasks = tasks.filter((task) => task.isDone === false)

        setTasks(cleanTasks)
    }

    return (
        <Button onClick={clear}>Clear Completed</Button>
    )
}

export default ClearCompletedTask