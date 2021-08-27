import {
    fireEvent, render
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainInput from './index';
import faker from 'faker';
import { TaskContext } from '../../contexts/TaskContext';

describe('main input', () => {
    it('should set input task', async () => {
        const { getByRole } = render(<MainInput />);

        const taskInput = getByRole('textbox');

        const value = faker.random.words();

        fireEvent.change(taskInput, {
            target: {
                value,
            },
        });

        expect(taskInput).toHaveValue(value);
    });

    it('should do all tasks', () => {
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
                <MainInput />
            </TaskContext.Provider>
        )

        const button = getByRole('button');

        fireEvent.click(button);

        const expectedValue = [{
            ...contextValue.tasks[0],
            isDone: true
        }];

        expect(contextValue.setTasks).toHaveBeenCalledWith(expectedValue);
    })

    it('should create a new task', () => {
        const contextValue = {
            tasks: [],
            setTasks: jest.fn()
        }

        const { getByRole } = render(
            <TaskContext.Provider value={contextValue}>
                <MainInput />
            </TaskContext.Provider>
        )

        const taskInput = getByRole('textbox');

        const inputValue = faker.random.words();

        fireEvent.change(taskInput, {
            target: {
                value: inputValue,
            },
        });

        fireEvent.keyDown(taskInput, {
            key: 'Enter'
        })

        expect(contextValue.setTasks).toHaveBeenCalledWith(expect.arrayContaining([
            expect.objectContaining({ title: inputValue })
        ]));
    })
});
