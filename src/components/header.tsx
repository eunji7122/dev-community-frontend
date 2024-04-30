import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/store";
import {clearToken} from "../slice/authSlice";

export default function Header() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const tokenState = useAppSelector(state => state.auth)

    const handleClickSignOut = async () => {
        dispatch(clearToken())
        navigate({pathname: '/',})
    }

    return (
        <header className="sticky top-0 shadow z-20 flex h-16 items-center border-b border-b-gray-500/30 bg-white py-5 text-sm font-medium leading-6 dark:border-b-gray-500/70 dark:bg-gray-800">
            <nav aria-label="Global" className="sticky top-0 mx-auto flex w-full max-w-7xl px-4 lg:px-0">
                <div className="flex w-full items-center justify-between">
                    <div className="flex">
                        <Link to={"/"}>
                            <span className="font-extrabold text-2xl mb-1 text-gray-700">
                                Dev
                            </span>
                        </Link>
                        <div className="ml-3 hidden items-center space-x-7 md:flex lg:ml-[105px]">
                            <div className="shrink-0">
                                <Link
                                    className="font-extrabold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 text-base hover:no-underline"
                                    to={"/questions"}>
                                    Q/A
                                </Link>

                            </div>
                            <div className="shrink-0">
                                <Link
                                    className="font-extrabold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 text-base hover:no-underline"
                                    to={"/community"}>
                                    COMMUNITY
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden items-center md:flex">
                        {tokenState.token === '' ?
                            <>
                                <Link to={"/login"}>
                                    <span className="ml-2 hidden h-[35px] w-[85px] items-center justify-center rounded border bg-gray-700 text-center text-xs font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 sm:flex lg:ml-10">
                                        로그인
                                    </span>
                                </Link>
                                <Link to={"/create-account"}>
                                    <span className="ml-2 hidden h-[35px] w-[85px] items-center justify-center rounded border bg-gray-700 text-center text-xs font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 sm:flex lg:ml-5">
                                        회원가입
                                    </span>
                                </Link>
                            </>
                            :
                            <>
                                <button className="ml-2 hidden h-[35px] w-[85px] items-center justify-center rounded border bg-gray-700 text-center text-xs font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 sm:flex lg:ml-10"
                                      onClick={handleClickSignOut}>
                                    로그아웃
                                </button>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}
