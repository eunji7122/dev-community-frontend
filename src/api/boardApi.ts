import axios from "axios"

const host = 'http://localhost:8070/api/boards'

export const getBoards = async () => {
    const res = await axios.get(`${host}/`)

    return res.data
}