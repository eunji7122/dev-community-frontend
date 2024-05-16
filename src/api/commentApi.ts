import axios from "axios"
import jwtAxios from "../util/jwtUtil"

const host = 'http://localhost:8070/api/comments'

export const createComment = async (postId: number, contents: string) => {
    const res = await jwtAxios.post(`${host}/`, {
        postId: postId,
        contents: contents
    })

    return res.data
}