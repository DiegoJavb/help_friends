import React from 'react';

const Comments = () => {
    return (
        <div>
            hola
        </div>
    );
};

export default Comments;

export async function getStaticProps(context) {
    console.log('context comments', context);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`)
    const data = await res.json();

    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{
            Comments: data
        }, // will be passed to the component as props
    }

}
export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`)
    const data = await res.json();
    console.log('data comments',data );
    const comments = data

    const paths = comments.map(comment=>{
        return {params:{commentID:''+comment.id}}
    })
    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}