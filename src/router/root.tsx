import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";

const Main = lazy(() => import("../pages/main"))
const Login = lazy(() => import("../pages/login"))
const CreateAccount = lazy(() => import("../pages/create-account"))
const Questions = lazy(() => import("../pages/question/questions"))

const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense><Main/></Suspense>
    },
    {
        path: 'login',
        element: <Suspense><Login/></Suspense>
    },
    {
        path: 'create-account',
        element: <Suspense><CreateAccount/></Suspense>
    }
    ,
    {
        path: 'questions',
        element: <Suspense><Questions/></Suspense>
    }
])

export default root