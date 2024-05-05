import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";

const getNum = (param: string, defaultValue: number) => {

    if (!param) {
        return defaultValue
    }

    return parseInt(param);
}

const useCustomMove = () => {

    const navigate = useNavigate();

    const [refresh, setRefresh] = useState(false);

    const [queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page')!, 1)
    const size = getNum(queryParams.get('size')!, 5)

    const queryDefault = createSearchParams({page: page.toString(), size: size.toString()}).toString()

    const moveToList = (pageParam: any) => {

        let queryStr: string;

        if (pageParam) {
            const pageNum = getNum(pageParam.page, 1)
            const sizeNum = getNum(pageParam.size, 5)

            queryStr = createSearchParams({page: pageNum.toString(), size: sizeNum.toString()}).toString()
        } else {
            queryStr = queryDefault
        }

        setRefresh(!refresh)

        navigate({pathname: '/questions', search: queryStr})
    }

    // const moveToModify = (num) => {
    //     navigate({
    //         pathname: `../modify/${num}`,
    //         search: queryDefault
    //     });
    // }
    //
    // const moveToRead = (num) => {
    //     navigate({
    //         pathname: `../read/${num}`,
    //         search: queryDefault
    //     })
    // }

    return {moveToList, page, size, refresh}
}

export default useCustomMove