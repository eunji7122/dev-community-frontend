import {Board} from "./board";

export interface Post {
    id: number,
    title: string,
    content: string,
    viewCount: number,
    board: Board,
    createdAt: string,
    updatedAt: string
}