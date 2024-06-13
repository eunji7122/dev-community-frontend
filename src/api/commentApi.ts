import jwtAxios from "../util/jwtUtil"

const host = 'http://localhost:8070/api/comments'

export const createComment = async (postId: number, contents: string) => {
    const res = await jwtAxios.post(`${host}/`, {
        postId: postId,
        contents: contents
    })

    return res.data
}

export const saveCommentHeart = async (commentId: number) => {
    const res = await jwtAxios.post(`${host}/${commentId}/heart`)

    return res.data
}

export const deleteCommentHeart = async (commentId: number) => {
    const res = await jwtAxios.delete(`${host}/${commentId}/heart`)

    return res.data
}