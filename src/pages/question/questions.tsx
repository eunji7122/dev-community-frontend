import SearchBar from "../../components/search-bar";
import Button from "../../components/button";
import Pagination from "../../components/pagination";
import DropDown from "../../components/drop-down";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

const Questions = () => {

    const navigate = useNavigate()

    const handleClickAdd = useCallback(() => {
        navigate({
            pathname: '../add'
        })
    }, []);

    const moveToView = (id: number) => {
        navigate({
            pathname: `../view/${id}`,
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

                {/*<div className="hidden -space-x-0.5 sm:flex">*/}
                {/*    <div className="relative inline-block text-left" data-headlessui-state="open">*/}
                {/*        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"*/}
                {/*                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"*/}
                {/*                type="button">*/}
                {/*            최신순*/}
                {/*            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">*/}
                {/*                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>*/}
                {/*            </svg>*/}
                {/*        </button>*/}

                {/*        <div id="dropdown"*/}
                {/*             className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">*/}
                {/*            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"*/}
                {/*                aria-labelledby="dropdownDefaultButton">*/}
                {/*                <li>*/}
                {/*                    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</p>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</p>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</p>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</p>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <div className="mb-9 sm:mb-16">
                <ul className="max-w-5xl mx-auto mt-10 divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="flex flex-col px-2 py-4 sm:px-2.5" onClick={() => moveToView(1)}>
                        <div className="my-2 flex flex-1 items-center gap-x-3">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-lg">
                                    Title
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    view1 like1
                                </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="line-clamp-2 w-fit truncate whitespace-normal break-all text-xs font-normal text-gray-500 hover:text-blue-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    #tag1 #tag2
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">10분전</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col px-2 py-4 sm:px-2.5">
                        <div className="my-2 flex flex-1 items-center gap-x-3">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-lg">
                                    Title
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    view1 like1
                                </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="line-clamp-2 w-fit truncate whitespace-normal break-all text-xs font-normal text-gray-500 hover:text-blue-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    #tag1 #tag2
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">10분전</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col px-2 py-4 sm:px-2.5">
                        <div className="my-2 flex flex-1 items-center gap-x-3">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-lg">
                                    Title
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    view1 like1
                                </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="line-clamp-2 w-fit truncate whitespace-normal break-all text-xs font-normal text-gray-500 hover:text-blue-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    #tag1 #tag2
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">10분전</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col px-2 py-4 sm:px-2.5">
                        <div className="my-2 flex flex-1 items-center gap-x-3">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-lg">
                                    Title
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    view1 like1
                                </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="line-clamp-2 w-fit truncate whitespace-normal break-all text-xs font-normal text-gray-500 hover:text-blue-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    #tag1 #tag2
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">10분전</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col px-2 py-4 sm:px-2.5">
                        <div className="my-2 flex flex-1 items-center gap-x-3">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-lg">
                                    Title
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    view1 like1
                                </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="line-clamp-2 w-fit truncate whitespace-normal break-all text-xs font-normal text-gray-500 hover:text-blue-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    #tag1 #tag2
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">10분전</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col px-2 py-4 sm:px-2.5">
                        <div className="my-2 flex flex-1 items-center gap-x-3">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-lg">
                                    Title
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    view1 like1
                                </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="line-clamp-2 w-fit truncate whitespace-normal break-all text-xs font-normal text-gray-500 hover:text-blue-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-1 items-center gap-x-3">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">
                                    #tag1 #tag2
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <p className="line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 sm:text-sm">10분전</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="mb-9 sm:mb-16">
                <Pagination/>
            </div>
        </div>
    )
}

export default Questions;