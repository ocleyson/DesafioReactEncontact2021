import unmockedAxios from 'axios';

const mockedAxios = jest.createMockFromModule('axios');

const axios = mockedAxios as jest.Mocked<typeof unmockedAxios>;

export default axios;
