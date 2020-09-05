import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [productItem, setProductItem] = useState<TProduct>()
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    id &&
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProductItem(data))
        .catch((error) => console.error(error))
  }, [id])

  return (
    <>
      <h1>Pagina de producto</h1>
      <section>{productItem?.name}</section>
    </>
  )
}

export default ProductPage
