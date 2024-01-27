import axios from "axios";
import {toast} from "react-toastify";

export default {

    setupInterceptors: () => {
        axios.interceptors.response.use(function (response) {
            return response
        }, function (error) {

            toast.error(error.response.data);
            return Promise.reject(error);
        });
    }
};
