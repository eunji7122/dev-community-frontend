import axios from "axios"

const host = 'http://localhost:8070/api/auth'
export const signInPost = async (signInParam: any) => {
    const header = {headers: {"Content-Type": "x-www-form-urlencoded"}}
    const form = new FormData()
    form.append('email', signInParam.email)
    form.append('password', signInParam.password)

    const res = await axios.post(`${host}/token`, form, header)
    return res.data
}