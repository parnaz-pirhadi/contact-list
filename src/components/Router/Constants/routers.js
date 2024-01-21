import React from "react";

const ContactList = React.lazy(() => import('../../../pages/ContactList'));
const ContactDetail = React.lazy(() => import('../../../pages/ContactDetail'));


const routers = [
    {
        path: "/",
        exact: true,
        component: ContactList,
    },
    {
        path: "/id",
        exact: true,
        component: ContactDetail,
    }
    ]
export default routers;
