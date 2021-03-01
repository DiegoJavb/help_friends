import { useRouter } from 'next/router'

const Category = () => {
  const router = useRouter()
  const { cid } = router.query

  return <p>Categoria: {cid}</p>
}

export default Category

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