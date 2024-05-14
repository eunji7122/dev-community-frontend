import axios from "axios"

const host = 'http://localhost:8070/api/posts'

export const getPost = async (id: number) => {
    const res = await axios.get(`${host}/${id}`)

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