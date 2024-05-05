import axios from "axios"

const host = 'http://localhost:8070/api/boards'

export const getBoards = async () => {
    const res = await axios.get(`${host}/`)

    return res.data
}

export const getPostsByBoardId = async (boardId: number, page: number, size: number) => {
    const res = await axios.get(`${host}/${boardId}/posts`, {
        params: {
            page: page,
            size: size
        }
    })

    return res.data
}