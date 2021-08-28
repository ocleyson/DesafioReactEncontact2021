import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const renderTestComponentWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return render(ui, { wrapper: BrowserRouter });
};

export default renderTestComponentWithRouter;