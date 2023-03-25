import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Components/Card'
import CardLoading from '../Components/CardLoading'

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        setFilterData(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  const filterProducts = (group) => {
    const updatedArray = products.filter((item) => item.category === group)
    setFilterData(updatedArray)
  }

  return (
    <div>
      <div className="bg-gradient-to-br from-orange-600 to-pink-500 h-auto flex flex-col justify-center items-center gap-6 overflow-hidden px-4 sm:px-8 py-4 md:py-8">
        <h1 className="text-3xl mt-6 font-serif text-white">Products</h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-4 py-6">
          <button
            onClick={() => setFilterData(products)}
            className="bg-white h-14 px-8 py-4 rounded-md shadow-gray-400 hover:scale-105 hover:bg-slate-400 hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterProducts("men's clothing")}
            className="bg-white h-14 px-8 py-4 rounded-md shadow-gray-400 hover:scale-105 hover:bg-slate-400 hover:text-white"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProducts("women's clothing")}
            className="bg-white h-14 px-8 py-4 rounded-md shadow-gray-400 hover:scale-105 hover:bg-slate-400 hover:text-white"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProducts('jewelery')}
            className="bg-white h-14 px-8 py-4 rounded-md shadow-gray-400 hover:scale-105 hover:bg-slate-400 hover:text-white"
          >
            Jewelery
          </button>
          <button
            onClick={() => filterProducts('electronics')}
            className="bg-white h-14 px-8 py-4 rounded-md shadow-gray-400 hover:scale-105 hover:bg-slate-400 hover:text-white"
          >
            Electronics
          </button>
        </div>
        <div className="bg-gray-100 outline-none rounded-md md:mt-6 w-full p-6">
          <div className="min-h-[400px] h-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            {isLoading ? (
              <CardLoading />
            ) : (
              filterData.map((singleData, index) => {
                return <Card key={index} singleData={singleData} />
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
