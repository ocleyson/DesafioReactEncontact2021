import { useState, useEffect } from 'react'
import { TaskContext, ITask } from '../../contexts/TaskContext';
import MainInput from '../MainInput'
import { Container, Title } from './styles'
import axios from 'axios';

function TaskContainer() {
    const [tasks, setTasks] = useState<ITask[]>([])

    async function fetchData() {
        const res = await axios.get('http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact2021/todos')

        setTasks(res?.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            <Container>
                <Title>Todos</Title>

                <MainInput />
            </Container>
        </TaskContext.Provider>
    );
}

export default TaskContainer;
