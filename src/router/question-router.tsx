import {lazy, Suspense} from "react";

const QuestionList = lazy(() => import("../pages/question/questions"))
const QuestionAdd = lazy(() => import("../pages/question/add-question"))
const QuestionModify = lazy(() => import("../pages/question/modify-question"))
const QuestionView = lazy(() => import("../pages/question/view-question"))

const questionRouter = () => {
    return [
        {
            path: '',
            element: <Suspense><QuestionList/></Suspense>
        },
        {
            path: 'view/:id',
            element: <Suspense><QuestionView/></Suspense>
        },
        {
            path: 'add',
            element: <Suspense><QuestionAdd/></Suspense>
        },
        {
            path: 'modify/:id',
            element: <Suspense><QuestionModify/></Suspense>
        }
    ]
}

export default questionRouter()