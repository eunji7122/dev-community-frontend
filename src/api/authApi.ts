import axios from "axios"

const host = 'http://localhost:8070/api/auth'
export const getToken = async (params: any) => {
    const res = await axios.post(`${host}/token`, {
        email: params.email,
        password: params.password
    })
console.log(res.data)
    return res.data
}