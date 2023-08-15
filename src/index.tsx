import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from 'react-router-dom';
import {Main} from './pages/main/Main';
import {Form} from './pages/form/Form';
import {Provider} from 'react-redux';
import {store} from './store/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/form',
        element: <Form/>,
        children: [
            {
                path: '/form/edit',
                element: <Form/>
            }
        ]
    },
    {
        path: '/*',
        element: <div>Page not found</div>
    }
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
