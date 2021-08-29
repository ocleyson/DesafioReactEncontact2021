import { useEffect, useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

function TaskCounter() {
    const [numberOfTasksLeft, setNumberOfTasksLeft] = useState(0)
    const { tasks } = useContext(TaskContext)

    useEffect(() => {
        const count = tasks.filter(item => item.isDone === false).length;
        setNumberOfTasksLeft(count)
    }, [tasks])

    return (
        <p>{numberOfTasksLeft} {numberOfTasksLeft <= 1 ? 'item' : 'items'} left</p>
    )
}

export default TaskCounter