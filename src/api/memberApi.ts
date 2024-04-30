import axios from "axios"

const host = 'http://localhost:8070/api/members'

export const signUp = async (params: any) => {
    const res = await axios.post(`${host}/`, {
        email: params.email,
        password: params.password,
        name: params.name,
        birthDate: "2000-01-01",
        gender: "MAN"
    })

    return res.data
}

export const getMe = async () => {
    const res = await axios.get(`${host}/`)

    return res.data
}