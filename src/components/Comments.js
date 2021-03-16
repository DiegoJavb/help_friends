import React from 'react'
import useSWR from "swr";
import {fetcher} from "@/lib/utils";
import withAuth from "@/hocs/withAuth";

const Comments = ({articleId}) => {
    console.log('articleId', articleId)
    const {data, error} = useSWR(`/articles/${articleId}/comments`, fetcher);
    console.log('data comments', data)
    if (error) return <div>No se pudo cargar los comentarios </div>
    if (!data) return <div>Cargando comentarios... </div>
    //render data
    return <div>{data.map(comment => <li key={comment.id}>{comment.text}</li>)}</div>
}
export default withAuth(Comments)