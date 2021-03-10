import React from 'react'
import useSWR from "swr";
import {fetcher} from "../utils";

const Comments = (articleId) => {
    const {data, error} = useSWR('/comments', fetcher);

    if (error) return <div>No se pudo cargar los comentarios </div>
    if (!data) return <div>Cargando comentarios... </div>
    //render data
    return <div>{data.map(comment => <li key={comment.id}>{comment.text}</li>)}</div>
}
export default Comments;