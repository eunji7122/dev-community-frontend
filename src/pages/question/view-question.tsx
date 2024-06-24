import React, {SyntheticEvent, useEffect, useState} from 'react';
import Button from "../../components/button";
import {useNavigate, useParams} from "react-router-dom";
import {deletePostHeart, getPost, getPostHeartByMember, savePostHeart} from "../../api/postApi";
import {Post} from "../../model/post";
import Comments from "../../components/comments";
import userImage from "../../images/default_user.png";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import {useAppSelector} from "../../store/store";

const ViewQuestion = () => {
    const {id} = useParams<string>()
    const navigate = useNavigate()

    const tokenState = useAppSelector(state => state.auth)

    const [post, setPost] = useState<Post>()
    const [heart, setHeart] = useState<boolean>(false)

    useEffect(() => {
        getPost(parseInt(id!!)).then(data => {
            setPost(data.data);
            console.log(data.data)
        })

        if (tokenState.accessToken !== '') {
            getPostHeartByMember(parseInt(id!!)).then(data => {
                setHeart(data.data)
            })
        }

    }, [id]);

    const moveToModify = () => {
        navigate({
            pathname: `../${id}/modify`,
        })
    }

    const addDefaultImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = userImage;
    };

    const heartButtonClick = () => {
        if (heart) {
            deletePostHeart(parseInt(id!)).then(() =>{
                alert("좋아요 취소")
                setHeart(!heart)
            })
        } else {
            savePostHeart(parseInt(id!)).then(() =>{
                alert("좋아요 등록")
                setHeart(!heart)
            })
        }
    }

    return (
        <div>
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{post?.title}</h1>
                <div className="mb-8 flex flex-wrap sm:mb-9">
                    <div className="flex items-center justify-center">
                        <img
                            className="inline-block h-10 w-10 rounded-full"
                            src={post?.member.profile ? post?.member.profile : userImage} onError={addDefaultImage}
                            alt="프로필 사진"/>
                        <div className="ml-2 flex flex-1 flex-col text-base font-normal">
                            <span className="pl-0.5 text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200">
                                {post?.member.name}
                            </span>
                            <div
                                className="flex items-center gap-x-1 text-sm font-normal text-gray-700 dark:text-gray-300">
                                <span>{post?.updatedAt}</span><span>·</span>
                                <div className="flex items-center gap-x-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                         className="h-4 w-4 shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    {post?.viewCount}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto flex items-center gap-x-4 text-sm text-gray-700 sm:gap-x-5 dark:text-gray-300">
                        <button onClick={heartButtonClick}>
                            { !heart ?
                                <BsBookmarkHeart size={30}/>
                                :
                                <BsBookmarkHeartFill size={30}/>
                            }
                        </button>
                        {/*<button>*/}
                        {/*    <span className="sr-only">좋아요</span>*/}
                        {/*    <svg width="24" height="24" viewBox="0 0 24 24">*/}
                        {/*        <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                    </div>
                </div>
                <div>
                    <div role="textbox" aria-multiline="true" aria-readonly="true" aria-label=""
                         aria-placeholder="내용을 입력해주세요." translate="no"
                         className="ProseMirror remirror-editor remirror-a11y-dark">
                        <p dangerouslySetInnerHTML={{ __html: post?.content! }}/>
                        <br className="ProseMirror-trailingBreak"/>
                    </div>
                </div>
                <div className="flex flex-1 flex-wrap items-center">
                    {post?.tags.map((tag: string, index: number) =>
                        <p
                            key={index}
                            className="mx-1.5 my-0.5 flex h-7 items-center rounded-[39px] bg-gray-100 px-3 py-1.5 text-sm font-normal text-gray-700 hover:text-blue-500 hover:no-underline dark:bg-gray-700 dark:text-gray-300 dark:hover:text-blue-200">
                            <span className="hover:no-underline">{tag}</span>
                        </p>
                    )}
                </div>
                <div className="float-right" onClick={() => moveToModify()}>
                    <Button value="수정" />
                </div>
                <hr className="h-px mt-16 bg-gray-200 border-0 dark:bg-gray-700"/>
            </div>

            <div>
                <Comments postId={parseInt(id!)}/>
            </div>
        </div>
    );
};

export default ViewQuestion;