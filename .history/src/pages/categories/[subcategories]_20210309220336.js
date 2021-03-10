import React from 'react';

const Subcategories = () => {
    return (
        <div>
        </div>
    );
};

export default Subcategories;

export async function getStaticProps(context) {
    console.log('context', context);
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
export async function getStaticPaths() {
    
    return {
        paths: [
            { params: { subcategories:'a' } } // See the "paths" section below
        ],
        fallback:false // See the "fallback" section below
    };
}