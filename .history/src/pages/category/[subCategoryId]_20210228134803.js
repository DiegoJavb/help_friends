import { useRouter } from 'next/router'

const Category = () => {
  const router = useRouter()
  const { cid } = router.query

  return <p>Categoria: {cid}</p>
}

export default Category