import React, {ChangeEvent, useEffect, useState} from 'react';
import Button from "../../components/button";
import QuillEditor from "../../components/quill-editor";
import {Post} from "../../model/post";
import {useNavigate, useParams} from "react-router-dom";
import {getPost, updatePost} from "../../api/postApi";

const BOARD_ID = 1

const ModifyQuestion = () => {
    const navigate = useNavigate()

    const {id} = useParams()
    const [post, setPost] = useState<Post>()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState("")
    const [rewardPoint, setRewardPoint] = useState(0)

    useEffect(() => {
        getPost(parseInt(id!!)).then(data => {
            setPost(data.data);

            setTitle(data.data.title)
            setContent(data.data.content)
            setTags(data.data.tags)
            setRewardPoint(data.data.rewardPoint)
        })
    }, [id]);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value)
    }

    const handleRewardPointChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRewardPoint(parseInt(e.target.value))
    }

    const handleClickModify = () => {
        updatePost(BOARD_ID, parseInt(id!), title, content, tags, rewardPoint, []).then(() => {
            navigate({
                pathname: `../${id}`,
            })
        })
    }

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
                                       required
                                       value={title}
                                       onChange={handleTitleChange}/>
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
                                <input
                                    type="text"
                                    name="tag"
                                    id="tag"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="태그를 입력해 주세요"
                                    required
                                    value={tags}
                                    onChange={handleTagsChange}
                                />
                                <p className="mt-1 ml-1 text-sm text-gray-500 dark:text-gray-300" id="addedTag">
                                    #Spring
                                </p>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="point"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">채택 포인트</label>
                                <input
                                    type="number"
                                    name="point"
                                    id="point"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="1000"
                                    required
                                    value={rewardPoint}
                                    onChange={handleRewardPointChange}
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="point"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                                <QuillEditor value={content} onChange={setContent} height={"300px"}/>
                            </div>

                        </div>
                        <div className="float-right" onClick={handleClickModify}>
                            <Button value="수정"/>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    );
};

export default ModifyQuestion;