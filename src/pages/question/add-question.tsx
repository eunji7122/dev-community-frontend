import React, {ChangeEvent, useState} from 'react';
import Button from "../../components/button";
import {createPost} from "../../api/postApi";
import useCustomMove from "../../hooks/useCustomMove";
import QuillEditor from "../../components/quill-editor";

const BOARD_ID = 1

const AddQuestion = () => {
    const {moveToList} = useCustomMove()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState("")
    const [rewardPoint, setRewardPoint] = useState(0)

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value)
    }

    const handleRewardPointChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRewardPoint(parseInt(e.target.value))
    }

    const handleClickAdd = () => {
        createPost(BOARD_ID, title, content, tags, rewardPoint, []).then(result => {
            console.log(result)
            moveToList({page: 1, size: 5})
        })
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">질문 등록하기</h2>
                    <form action="#">
                        <div className="">
                            <div className="mb-5">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    제목
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="제목을 입력해 주세요"
                                    required
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="tag"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">태그</label>
                                <input
                                    type="text"
                                    name="tag"
                                    id="tag"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="태그를 입력해 주세요 (예시: #java #kotlin)"
                                    value={tags}
                                    onChange={handleTagsChange}
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="point"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">채택 포인트</label>
                                <input
                                    type="number"
                                    name="point"
                                    id="point"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="0"
                                    value={rewardPoint}
                                    onChange={handleRewardPointChange}
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="point"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">본문</label>
                                <QuillEditor content={content} setContent={setContent} height={"300px"}/>
                            </div>

                        </div>
                        <div className="float-right mt-10 my-5" onClick={handleClickAdd}>
                            <Button value="등록"/>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddQuestion;