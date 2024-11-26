import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainActivity from './Components/MainActivity';
import Questions from './Components/Questions';
import Options from './StyledComponents/Options';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    index: true
  },
  {
    path: "/main-activity",
    element: <MainActivity />
  },
  {
    path: "/C++",
    element: <App />

  },
  {
    path: "/Java",
    element: <App />
  },
  {
    path: "/python",
    element: <App />
  },
  {
    path: "/questions",
    element: <Questions />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
