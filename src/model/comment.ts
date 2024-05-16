import {Member} from "./member";

export interface Comment {
    id: number,
    contents: string,
    member: Member,
    heartCount: number,
    updatedAt: string
}