import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      // .then(console.log)
      .then(({ data, length }) => {
        setProductList(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div>{product.id}</div>
      ))}
    </div>
  )
}

export default HomePage
