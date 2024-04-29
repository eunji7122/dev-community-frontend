import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import questionRouter from "./question-router";

const Main = lazy(() => import("../pages/main"))
const Login = lazy(() => import("../pages/signIn"))
const CreateAccount = lazy(() => import("../pages/create-account"))
const QuestionIndex = lazy(() => import("../pages/question/index-question"))

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
        element: <Suspense><QuestionIndex/></Suspense>,
        children: questionRouter
    }
])

export default root