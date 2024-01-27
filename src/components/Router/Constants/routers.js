import React from "react";

const HomePage = React.lazy(() => import('../../../pages/HomePage'));
const ContactDetail = React.lazy(() => import('../../../pages/ContactDetail'));


const routers = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
        path: "/:id",
        exact: true,
        component: ContactDetail,
    }
    ]
export default routers;
