import React from 'react';
import Button from "../../components/button";
import {useNavigate} from "react-router-dom";

const ViewQuestion = () => {

    const navigate = useNavigate()

    const moveToModify = (id: number) => {
        navigate({
            pathname: `../modify/${id}`,
        })
    }

    return (
        <div>
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Test Question</h1>
                <div className="mb-8 flex flex-wrap sm:mb-9">
                    <div className="flex items-center justify-center">
                        <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="../../images/default_user.png"
                            alt="프로필 사진"/>
                        <div className="ml-2 flex flex-1 flex-col text-base font-normal">
                            <span className="pl-0.5 text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200">
                                글쓴이
                            </span>
                            <div
                                className="flex items-center gap-x-1 text-sm font-normal text-gray-700 dark:text-gray-300">
                                <span>10분 전</span><span>·</span>
                                <div className="flex items-center gap-x-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                         className="h-4 w-4 shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    50
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto flex items-center gap-x-4 text-sm text-gray-700 sm:gap-x-5 dark:text-gray-300">
                        <button>
                            <span className="sr-only">좋아요</span>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <div role="textbox" aria-multiline="true" aria-readonly="true" aria-label=""
                         aria-placeholder="내용을 입력해주세요." translate="no"
                         className="ProseMirror remirror-editor remirror-a11y-dark">
                        <p>
                            가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는 온갖 과실이 어디 있으랴?
                        </p>
                        <br className="ProseMirror-trailingBreak"/>
                    </div>
                </div>
                <div className="flex flex-1 flex-wrap items-center">
                    <p className="mx-1.5 my-0.5 flex h-7 items-center rounded-[39px] bg-gray-100 px-3 py-1.5 text-sm font-normal text-gray-700 hover:text-blue-500 hover:no-underline dark:bg-gray-700 dark:text-gray-300 dark:hover:text-blue-200">
                        <span className="hover:no-underline">#java</span>
                    </p>
                    <p className="mx-1.5 my-0.5 flex h-7 items-center rounded-[39px] bg-gray-100 px-3 py-1.5 text-sm font-normal text-gray-700 hover:text-blue-500 hover:no-underline dark:bg-gray-700 dark:text-gray-300 dark:hover:text-blue-200">
                        <span className="hover:no-underline">#spring</span>
                    </p>
                    <p className="mx-1.5 my-0.5 flex h-7 items-center rounded-[39px] bg-gray-100 px-3 py-1.5 text-sm font-normal text-gray-700 hover:text-blue-500 hover:no-underline dark:bg-gray-700 dark:text-gray-300 dark:hover:text-blue-200">
                        <span className="hover:no-underline">#spring boot</span>
                    </p>
                </div>
                <div className="float-right" onClick={() => moveToModify(1)}>
                    <Button value="수정" />
                </div>

            </div>
        </div>
    );
};

export default ViewQuestion;