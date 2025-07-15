import React from 'react'
import cleanImg from "../../assets/image.png"
import checked from "../../assets/checkmark.svg"
const Clean = () => {
  return (
    <section className='py-[65px] bg-[#F7F8FA]'>
        <div className="container flex justify-between">
            <div className="flex flex-col gap-5">
                <h2 className='text-[#1D252C] text-[40px]'>
                    Clean and fragrant soy wax
                </h2>
                <p className='text-[#56B280]'>
                    Made for your home and for your wellness
                </p>
                <ul className='flex flex-col gap-3'>
                    <li className='flex gap-2 items-center'>
                        <img src={checked} alt="" /> 
                        <span><span className='font-semibold'>Eco-sustainable: </span>All recyclable materials, 0% CO2 emissions</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img src={checked} alt="" /> 
                        <span><span className='font-semibold'>Hyphoallergenic: </span>100% natural, human friendly ingredients </span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img src={checked} alt="" /> 
                        <span><span className='font-semibold'>Handmade: </span>All candles are craftly made with love. </span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img src={checked} alt="" /> 
                        <span><span className='font-semibold'>Long burning: </span>No more waste. Created for last long.</span>
                    </li>
                </ul>
                <div>
                    <button className='bg-[#56B280] text-white py-2 px-[44px] rounded-sm'>Learn more</button>
                </div>
            </div>
            <div>
                <img src={cleanImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Clean