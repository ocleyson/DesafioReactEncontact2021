import {
    waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskContainer from './index';
import faker from 'faker';
import renderTestComponentWithRouter from '../../helpers/renderTestComponentWithRouter';

import axios, { AxiosResponse } from 'axios';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('task container', () => {
    it('should fetch tasks api', async () => {
        renderTestComponentWithRouter(<TaskContainer />);

        const data = [{
            id: faker.datatype.uuid(),
            title: faker.random.words(),
            isDone: false,
        }]

        const mockedResponse: AxiosResponse = {
            data,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
            request: {},
        };

        mockedAxios.get.mockResolvedValue(mockedResponse);

        await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
    });
});
