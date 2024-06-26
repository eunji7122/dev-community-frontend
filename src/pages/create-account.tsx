import Layout from "../layouts/layout";
import {ChangeEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {signUp} from "../api/memberApi";

export default function CreateAccount() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleClickSignUp = async () => {
        const params = {
            email: email,
            password: password,
            name: name
        }

        signUp(params).then(res => {
            navigate({
                pathname: '/login',
            })
        })
    }

    return (
        <Layout>
            <div>
                {/*<div className="flex justify-center items-center flex-wrap g-6 text-gray-800">*/}
                <div className="mt-20 flex justify-center px-6 pb-16 sm:mt-32 sm:px-0">
                    <div className="w-full max-w-md">
                        <p className="py-8 text-center font-bold text-2xl">
                            개발 커뮤니티에 오신 것을 환영해요
                        </p>

                        <div>
                            <span className="text-sm font-bold text-gray-600">
                                소셜 회원가입
                            </span>
                            <div className="mt-1 grid grid-cols-3 gap-3">
                                <div>
                                    <Link className="inline-flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 shadow-sm hover:border-gray-500 text-center"
                                          to={"/"}>
                                        Google
                                    </Link>
                                </div>
                                <div>
                                    <Link className="inline-flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 shadow-sm hover:border-gray-500 text-center"
                                          to={"/"}>
                                        Naver
                                    </Link>
                                </div>
                                <div>
                                    <Link className="inline-flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 shadow-sm hover:border-gray-500 text-center"
                                          to={"/"}>
                                        Kakao
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative my-7">
                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p className="px-2 text-gray-500 text-sm">
                                    회원가입에 필요한 정보를 입력해 주세요
                                </p>
                            </div>
                        </div>

                        <form className="mt-8 space-y-6">
                            <div className="space-y-6 rounded-md shadow-sm">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        아이디
                                    </label>
                                    <input
                                        id="email"
                                        type="text"
                                        className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base"
                                        placeholder="이메일 형식으로 입력해 주세요"
                                        name="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        비밀번호
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        autoComplete="current-password"
                                        className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base"
                                        placeholder="최소 6자 이상(알파벳, 숫자 필수)"
                                        name="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        이름
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base"
                                        placeholder="홍길동"
                                        name="name"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="inline-block px-7 py-3 bg-gray-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-150 ease-in-out w-full"
                                onClick={handleClickSignUp}
                            >
                                회원가입
                            </button>
                        </form>

                        <div className="py-7 px-16 flex justify-between items-center">
                            <ul className="flex flex-wrap items-center text-gray-600 text-sm">
                                <li>
                                    <Link to={"/"}>아이디 찾기</Link>
                                </li>
                                <p className="text-xs text-gray-400 px-5">|</p>
                                <li>
                                    <Link to={"/"}>비밀번호 찾기</Link>
                                </li>
                                <p className="text-xs text-gray-400 px-5">|</p>
                                <li>
                                    <Link to={"/"}>회원가입</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
