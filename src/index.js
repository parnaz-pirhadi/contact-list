import React ,{Suspense} from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from "./redux/configureStore";
import ApiInterceptor from "../src/redux/apiInterceptor"
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore();
import App from './App';

ApiInterceptor.setupInterceptors(store);

root.render(
        <ReduxProvider store={store}>
                <Suspense fallback={<div/>}>
                    <BrowserRouter basename={"/contact-list"}>
                        <App/>
                    </BrowserRouter>

                </Suspense>
        </ReduxProvider>
);

