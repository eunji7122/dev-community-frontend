import axios from "axios"
import jwtAxios from "../util/jwtUtil"

const host = 'http://localhost:8070/api/posts'

export const getPost = async (id: number) => {
    const res = await axios.get(`${host}/${id}`)

    return res.data
}

export const createPost = async (boardId: number, title: string, content: string, tags: string, rewardPoint: number) => {
    const res = await jwtAxios.post(`${host}/`, {
        title: title,
        content: content,
        boardId: boardId,
        tags: tags,
        rewardPoint: rewardPoint
    })

    return res.data
}

export const updatePost = async () => {
    const res = await axios.get(`${host}/`)

    return res.data
}

export const deletePost = async () => {
    const res = await axios.get(`${host}/`)

    return res.data
}