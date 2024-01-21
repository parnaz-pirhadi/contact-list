import React ,{Suspense} from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from "./redux/configureStore";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore();

root.render(
        <ReduxProvider store={store}>
                <Suspense fallback={<div/>}>
                    <BrowserRouter basename={"/contact-list"}>
                        <App/>
                    </BrowserRouter>

                </Suspense>
        </ReduxProvider>
);

