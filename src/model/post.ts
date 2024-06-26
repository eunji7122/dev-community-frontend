import {Board} from "./board";
import {Member} from "./member";

export interface Post {
    id: number,
    title: string,
    content: string,
    viewCount: number,
    board: Board,
    member: Member,
    tags: Array<string>,
    heartCount: number,
    rewardPoint: number,
    createdAt: string,
    updatedAt: string
}