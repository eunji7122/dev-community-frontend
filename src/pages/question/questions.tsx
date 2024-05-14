import SearchBar from "../../components/search-bar";
import Button from "../../components/button";
import Pagination from "../../components/pagination";
import DropDown from "../../components/drop-down";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {Post} from "../../model/post";
import {getPostsByBoardId} from "../../api/boardApi";
import {PageInfo} from "../../model/pageInfo";
import useCustomMove from "../../hooks/useCustomMove";

const BOARD_ID = 1

const Questions = () => {

    const navigate = useNavigate()
    const {page, size, refresh, moveToList} = useCustomMove();

    const [posts, setPosts] = useState<Post[]>([]);
    const [pageInfo, setPageInfo] = useState<PageInfo>();


    useEffect(() => {
        getPostsByBoardId(BOARD_ID, page, size).then(res => {
            setPosts(res.data.dtoList)
            setPageInfo(res.data)
        })
    }, [page, size, refresh])

    const handleClickAdd = useCallback(() => {
        navigate({
            pathname: '../questions/add'
        })
    }, []);

    const moveToView = (id: number) => {
        navigate({
            pathname: `../questions/${id}`,
        })
    }

    return (
        <div>
            <div className="relative my-6 flex items-center justify-between">
                <div className="hidden flex-none sm:inline" onClick={handleClickAdd}>
                    <Button value="등록" onClick={handleClickAdd}/>
                </div>

                <div className="w-1/2 float-right">
                    <SearchBar/>
                </div>
                <div className="hidden -space-x-0.5 sm:flex">
                    <DropDown/>
                </div>
            </div>

            <div className="mb-9 sm:mb-16">
                <ul className="max-w-5xl mx-auto mt-10 divide-y divide-gray-200 dark:divide-gray-700">
                    {posts.map((item: Post) =>
                        <li key={item.id} className="flex flex-col px-2 py-4 sm:px-2.5" onClick={() => moveToView(item.id)}>
                            <div className="my-2 flex flex-1 items-center gap-x-3">
                                <div className="flex flex-1 items-center gap-x-3">
                                    <p className="line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-lg">
                                        {item.title}
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                        view{item.viewCount} like1
                                    </p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="line-clamp-2 w-fit truncate whitespace-normal break-all text-xs font-normal text-gray-500 hover:text-blue-500 sm:text-sm">
                                    {item.content}
                                </p>
                            </div>
                            <div className="flex">
                                <div className="flex flex-1 items-center gap-x-3">
                                    <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                        #tag1 #tag2
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                        {item.updatedAt}
                                    </p>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>

            {pageInfo ?
                <div className="mb-9 sm:mb-16">
                <Pagination pageInfo={pageInfo} moveToList={moveToList}/>
            </div> : <></>
            }

        </div>
    )
}

export default Questions;