import { useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { TaskContext } from '../../contexts/TaskContext';
import TaskInput from '../TaskInput';
import { Ul, Li } from './styles'

function TaskList() {
    const { tasks } = useContext(TaskContext)

    const { filter } = useParams<{filter: string}>()

    const memorizedTasks = useMemo(() => {
        if(filter === 'active') {
            return tasks.filter((task) => task.isDone === false)
        } else if(filter === 'completed') {
            return tasks.filter((task) => task.isDone === true)
        } else {
            return tasks
        }
    }, [tasks, filter])

    return (
        <div>
            <Ul>
                {memorizedTasks?.map((task) => (
                    <Li key={task.id}>
                        <TaskInput task={task} />
                    </Li>
                ))}
            </Ul>
        </div>
    );
}

export default TaskList;
