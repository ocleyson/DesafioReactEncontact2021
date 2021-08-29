import ClearCompletedTask from "../ClearCompletedTask"
import TaskCounter from "../TaskCounter"
import TaskFilter from "../TaskFilter"
import { Container } from './styles'

function TaskFooter() {
    return (
        <Container>
            <TaskCounter />
            <TaskFilter />
            <ClearCompletedTask />
        </Container>
    )
}

export default TaskFooter