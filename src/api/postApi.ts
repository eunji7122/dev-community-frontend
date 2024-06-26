import axios from "axios"
import jwtAxios from "../util/jwtUtil"

const host = 'http://localhost:8070/api/posts'

export const getPost = async (id: number) => {
    const res = await axios.get(`${host}/${id}`)

    return res.data
}

export const createPost = async (boardId: number, title: string, content: string, tags: string, rewardPoint: number, files: []) => {
    var post = {
        title: title,
        content: content,
        tags: tags,
        rewardPoint: rewardPoint,
        boardId: boardId
    }

    const form = new FormData()
    for (const file in files) {
        form.append("files", file)
    }
    form.append("postRequestDto", new Blob([JSON.stringify(post)], {type: "application/json"}))

    const res = await jwtAxios.post(`${host}/`, form)

    return res.data
}

export const imagePost = async (file: File) => {
    const form = new FormData()
    form.append("files", file)

    const res = await jwtAxios.post(
        `${host}/file`,
        form
    )
    return res.data.data[0]
}

export const updatePost = async (boardId: number, postId: number, title: string, content: string, tags: string, rewardPoint: number, files: []) => {
    var post = {
        title: title,
        content: content,
        tags: tags,
        rewardPoint: rewardPoint,
        boardId: boardId
    }

    const form = new FormData()
    for (const file in files) {
        form.append("files", file)
    }
    form.append("postRequestDto", new Blob([JSON.stringify(post)], {type: "application/json"}))

    console.log("test")
    const res = await jwtAxios.put(`${host}/${postId}`, form)

    return res.data
}

export const deletePost = async () => {
    const res = await axios.get(`${host}/`)

    return res.data
}

export const getPostHeartByMember = async (postId: number) => {
    const res = await jwtAxios.get(`${host}/${postId}/heart`)

    return res.data
}

export const savePostHeart = async (postId: number) => {
    const res = await jwtAxios.post(`${host}/${postId}/heart`)

    return res.data
}

export const deletePostHeart = async (postId: number) => {
    const res = await jwtAxios.delete(`${host}/${postId}/heart`)

    return res.data
}

export const getComments = async (postId: number) => {
    const res = await axios.get(`${host}/${postId}/comments`)

    return res.data
}

export const getCommentsWithHeart = async (postId: number) => {
    const res = await jwtAxios.get(`${host}/${postId}/comments/heart`)

    return res.data
}