import {lazy, Suspense} from "react";
import { Navigate } from "react-router-dom";

const QuestionList = lazy(() => import("../pages/question/questions"))
const QuestionAdd = lazy(() => import("../pages/question/add-question"))

const questionRouter = () => {
    return [
        {
            path: 'list',
            element: <Suspense><QuestionList/></Suspense>
        },
        {
            path: '',
            element: <Navigate replace={true} to={'list'}/>
        },
        {
            path: 'add',
            element: <Suspense><QuestionAdd/></Suspense>
        }

    ]
}

export default questionRouter()