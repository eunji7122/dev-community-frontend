import {Cookies} from "react-cookie";

const cookies = new Cookies()

export const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date()
    expires.setUTCDate(expires.getUTCDate() + days)
    return cookies.set(name, value, {expires: expires, path: '/' })
}

export const getCookie = (name: string) => {
    return cookies.get(name)
}

export const removeCookie = (name: string) => {
    cookies.remove(name)
}