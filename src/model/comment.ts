import {Member} from "./member";

export interface Comment {
    id: number,
    contents: string,
    member: Member,
    isHeart: boolean,
    heartCount: number,
    updatedAt: string
}