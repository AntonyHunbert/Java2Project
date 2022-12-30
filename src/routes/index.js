import HomePage from "../HomePage/HomePage";
import Repo2 from "../Repo1/Repo2";
import { Navigate } from 'react-router-dom'
import Rest1 from "../Rest/Rest1";
import Rest2 from "../Rest/Rest2";
import Rest3 from "../Rest/Rest3";
import Rest4 from "../Rest/Rest4";
import Rest5 from "../Rest/Rest5";
import Rest6 from "../Rest/Rest6";
import Rest7 from "../Rest/Rest7";
import Rest8 from "../Rest/Rest8";
import Rest9 from "../Rest/Rest9";



export default [
    {
        path: '/homepage',
        element: <HomePage/>
    },
    {
        path: '/',
        element: <Navigate to='/homepage'></Navigate>
    },
    {
        path: '/homepage/antd-admin/releases',
        element: <Rest1/>
    },
    {
        path: '/homepage/arco-design/closedIssues',
        element: <Rest2/>
    },
    {
        path: '/homepage/howtocook/developers',
        element: <Rest3/>
    },
    {
        path: '/homepage/antd-admin/closedIssues',
        element: <Rest4/>
    },
    {
        path: '/homepage/howtocook/closedIssues',
        element: <Rest5/>
    },
    {
        path: '/homepage/antd-admin/developers',
        element: <Rest6/>
    },
    {
        path: '/homepage/arco-design/developers',
        element: <Rest7/>
    },
    {
        path: '/homepage/arco-design/releases',
        element: <Rest8/>
    },
    {
        path: '/homepage/howtocook/releases',
        element: <Rest9/>
    },

]