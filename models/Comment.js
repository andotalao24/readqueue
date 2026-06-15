import {getDB} from "./db.js"

export function getCommentsCollection () {
    return getDB().collection("comments")
}