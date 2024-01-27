import React from "react";
import Router from "./components/Router";
import {ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"


function App() {
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                zoom={Zoom}
                closeButton={false}
            />
            <Router/>

        </>
    );
}

export default App;
