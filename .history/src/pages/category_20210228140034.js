import React from 'react';

const Category = () => {

    return (
        <div>
            hola dieguito
        </div>
    );
};

export default Category;

export async function getStaticProps() {
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