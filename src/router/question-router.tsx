import {lazy, Suspense} from "react";
import { Navigate } from "react-router-dom";

const questionList = lazy(() => import("../pages/question/questions"))

const questionRouter = () => {
    return [

    ]
}

export default questionRouter()