import { useParams } from 'react-router-dom'
import { Ul, Li, StyledLink as Link } from "./styles"

function TaskFilter() {

    const { filter } = useParams<{filter: string}>()

    return (
        <Ul>
            <Li isMarked={filter === 'all'}>
                <Link to="/all">All</Link>
            </Li>
            <Li isMarked={filter === 'active'}>
                <Link to="/active">Active</Link>
            </Li>
            <Li isMarked={filter === 'completed'}>
                <Link to="/completed">Completed</Link>
            </Li>
        </Ul>
    )
}

export default TaskFilter