import React from 'react';
import Button from "../../components/button";

const ModifyQuestion = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">질문 수정하기</h2>
                    <form action="#">
                        <div className="">
                            <div className="mb-5">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    제목
                                </label>
                                <input type="text" name="title" id="title"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="제목을 입력해 주세요"
                                       required/>
                            </div>

                            {/*<div className="mb-5">*/}
                            {/*    <label htmlFor="tag"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">태그</label>*/}
                            {/*    <select id="tag"*/}
                            {/*            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">*/}
                            {/*        <option selected>태그를 선택해 주세요</option>*/}
                            {/*        <option value="spring">Spring</option>*/}
                            {/*        <option value="spring_boot">Spring Boot</option>*/}
                            {/*        <option value="jpa">JPA</option>*/}
                            {/*        <option value="postgresql">PostgreSQL</option>*/}
                            {/*    </select>*/}
                            {/*</div>*/}

                            <div className="mb-5">
                                <label htmlFor="tag"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">태그</label>
                                <input type="text" name="tag" id="tag"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="태그를 입력해 주세요" required/>
                                <p className="mt-1 ml-1 text-sm text-gray-500 dark:text-gray-300" id="addedTag">
                                    #Spring
                                </p>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="point"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">채택 포인트</label>
                                <input type="number" name="point" id="point"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="1000" required/>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="point"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                                <div className="w-full mb-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                    <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                                        <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                                                    </svg>
                                                    <span className="sr-only">Attach file</span>
                                                </button>
                                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                                    </svg>
                                                    <span className="sr-only">Embed map</span>
                                                </button>
                                                <label htmlFor="file">
                                                    <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                                        </svg>
                                                        <span className="sr-only">Upload image</span>
                                                    </button>
                                                </label>
                                                <input className="hidden" type="file" name="file" id="file"/>

                                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                                                        <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"/>
                                                    </svg>
                                                    <span className="sr-only">Format code</span>
                                                </button>
                                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"/>
                                                    </svg>
                                                    <span className="sr-only">Add emoji</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                                        <label htmlFor="editor" className="sr-only">Publish post</label>
                                        <textarea id="editor" rows={10}
                                                  className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-none"
                                                  placeholder="내용을 입력해 주세요"
                                                  required />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="float-right">
                            <Button value="수정"/>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    );
};

export default ModifyQuestion;