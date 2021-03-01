import React from 'react';

const ArticleDetails = () => {
    return (
        <div>
        </div>
    );
};

export default ArticleDetails;

export async function getStaticProps(context) {
    const res = await fetch(``)
    const data = await res.json();

    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{}, // will be passed to the component as props
    }

}