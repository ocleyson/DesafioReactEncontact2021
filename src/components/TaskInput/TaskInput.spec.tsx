import {
    fireEvent, render, waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskInput from './index';
import faker from 'faker';
import { TaskContext } from '../../contexts/TaskContext';

describe('task input', () => {
    it('should remove task', () => {
        const tasks = [{
            id: faker.datatype.uuid(),
            title: faker.random.words(),
            isDone: false,
        }]

        const contextValue = {
            tasks,
            setTasks: jest.fn()
        }

        const { getByRole } = render(
            <TaskContext.Provider value={contextValue}>
                <TaskInput task={tasks[0]} />
            </TaskContext.Provider>
        )

        const button = getByRole('button');

        fireEvent.click(button);

        expect(contextValue.setTasks).toHaveBeenCalledTimes(1);
    })

    it('should enable task for editing', async () => {
        const tasks = [{
            id: faker.datatype.uuid(),
            title: faker.random.words(),
            isDone: false,
        }]

        const contextValue = {
            tasks,
            setTasks: jest.fn()
        }

        const { getByText, getByRole } = render(
            <TaskContext.Provider value={contextValue}>
                <TaskInput task={tasks[0]} />
            </TaskContext.Provider>
        )

        const task = getByText(tasks[0].title);

        fireEvent.doubleClick(task);

        await waitFor(() => {
            expect(task).not.toBeInTheDocument()
        })
        await waitFor(() => {
            expect(getByRole('textbox')).toBeInTheDocument()
        })
    })
});
