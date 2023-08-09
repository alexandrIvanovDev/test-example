import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from 'react-router-dom';
import {Main} from './pages/main/Main';
import {Form} from './pages/form/Form';

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
        element: <Form/>
    }
]);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
