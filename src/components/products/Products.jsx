import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_URL = 'https://dummyjson.com'

const Products = () => {
    const [products, setProducts] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        axios
        .get(`${API_URL}/products`)
        .then(res =>{
            setProducts(res.data.products);
        })
        .catch(err =>{
            setError(err);
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])
    if(error){
        return <div>
            <p className='text-red text-center'>something went wrong</p>
        </div>
    }
  return (
    <section className="products py-16">
        <div className="container">
            <h2 className='text-center text-[0B254B] text-4xl'>Products</h2>
            <h3 className='text-center text-[#5E6E89] text-[18px] mt-4'>Order it for you or for your beloved ones </h3>
            {loading && <p>Loading ...</p>}
            <div className="grid grid-cols-4 mt-6 gap-6">
              {
                products?.map(item =>(
                      <div key={item.id} className="flex flex-col shadow-gray-400 shadow-sm p-4 rounded-md border border-slate-300">
                    <div className="">
                        <img src={item.thumbnail} alt="" />
                    </div>
                    <div className='flex justify-between flex-col gap-3'>
                        <h3 className='text-center text-[20px]'>
                        {item.title}
                        </h3>
                        <strong className='text-[#077780] text-right'>
                            {item.price} USD
                        </strong>
                    </div>
                </div>
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default Products