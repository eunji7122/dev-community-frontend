import React, {SyntheticEvent, useEffect, useState} from 'react';
import QuillEditor from "./quill-editor";
import Button from "./button";
import {getComments, getCommentsWithHeart} from "../api/postApi";
import {Comment} from "../model/comment";
import userImage from "../images/default_user.png";
import {createComment, deleteCommentHeart, saveCommentHeart} from "../api/commentApi";
import {useAppSelector} from "../store/store";
import HeartButton from "./heart-button";

interface propsType {
    postId: number
}

const Comments = ({postId}: propsType) => {

    const tokenState = useAppSelector(state => state.auth)

    const [comments, setComments] = useState<Comment[]>()
    const [htmlContent, setHtmlContent] = useState("")
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {
        getComments(postId).then(res => {
            const responseComments = res.data;
            if (tokenState.accessToken !== '') {
                getCommentsWithHeart(postId).then(data => {
                    const responseCommentWithHearts = data.data;
                    if (responseCommentWithHearts.length === responseComments.length) {
                        for (let i = 0; i < responseComments.length; i++) {
                            responseComments[i].isHeart = responseCommentWithHearts[i].isHeart;
                        }
                    }

                    setComments(responseComments)
                })
            } else {
                setComments(res.data)
            }

            setRefresh(false)
        })
    }, [postId, refresh, tokenState.accessToken]);

    const handleClickAdd = () => {
        createComment(postId, htmlContent).then(() => {
            setHtmlContent("")
            setRefresh(true)
        })
    }

    const addDefaultImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = userImage;
    };

    const heartButtonClick = (commentId: number, heart: boolean) => {
        if (heart) {
            deleteCommentHeart(commentId).then(() =>{
                alert("좋아요 취소")
                setRefresh(true)
            })
        } else {
            saveCommentHeart(commentId).then(() =>{
                alert("좋아요 등록")
                setRefresh(true)
            })
        }
    }

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
                                <div className="flex items-center gap-x-1">
                                    <HeartButton isHeart={item.isHeart} onClick={() => heartButtonClick(item.id, item.isHeart)}/>
                                    <span className="mb-2 text-sm font-normal text-gray-500">{item.heartCount}</span>
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