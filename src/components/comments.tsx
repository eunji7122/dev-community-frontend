import React, {SyntheticEvent, useEffect, useState} from 'react';
import QuillEditor from "./quill-editor";
import Button from "./button";
import {getComments} from "../api/postApi";
import {Comment} from "../model/comment";
import userImage from "../images/default_user.png";
import {createComment} from "../api/commentApi";

interface propsType {
    boardId: number,
    postId: number
}

const Comments = ({boardId, postId}: propsType) => {

    const [comments, setComments] = useState<Comment[]>()
    const [htmlContent, setHtmlContent] = useState("")
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getComments(postId).then(data => {
            setComments(data.data);
            setRefresh(false)
        })
    }, [refresh]);

    const handleClickAdd = () => {
        createComment(postId, htmlContent).then(() => {
            setHtmlContent("")
            setRefresh(true)
        })
    }

    const addDefaultImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = userImage;
    };

    return (
        <div className="w-full py-4 mb-20 mx-auto bg-white sm:px-4 sm:py-4 md:px-4 md:w-3/4">

            <div className="mb-24 h-32">
                <QuillEditor value={htmlContent} onChange={setHtmlContent} height={"100px"}/>
                <div className="float-right mt-14" >
                    <Button value="댓글 쓰기" onClick={handleClickAdd}/>
                </div>
            </div>

            <ul className="max-w-5xl mx-auto mt-10 divide-y divide-gray-200 dark:divide-gray-700">
                {comments?.map((item: Comment) =>
                    <li key={item.id} className="flex flex-col px-2 py-4 sm:px-2.5" >
                        <div className="flex flex-row gap-x-3">
                            <div className="my-2 flex flex-1 items-center gap-x-3">
                                <div className="flex flex-1 items-center gap-x-3">
                                    <img className="inline-block h-10 w-10 rounded-full"
                                         alt="프로필 사진"
                                         src={item?.member.profile ? item?.member.profile : userImage} onError={addDefaultImage}/>
                                    <div className="flex-col mt-1">
                                        <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                                            {item.member.name}
                                            <span className="ml-2 text-xs font-normal text-gray-500">{item.updatedAt}</span>
                                        </div>
                                        <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600"
                                             dangerouslySetInnerHTML={{ __html: item.contents }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <button className="inline-flex items-center px-1 -ml-1 flex-column">
                                        <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                                             fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5">
                                            </path>
                                        </svg>
                                    </button>
                                    {/*<button className="inline-flex items-center px-1 -ml-1 flex-column">*/}
                                    {/*    <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*         viewBox="0 0 20 20"*/}
                                    {/*         fill="currentColor">*/}
                                    {/*        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Comments;