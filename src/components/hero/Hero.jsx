import React from 'react'
import bgImage from '../../assets/bg-image.png';
const Hero = () => {
  return (
    <section style={{ backgroundImage: `url(${bgImage})` }} className="h-screen w-full bg-no-repeat bg-cover bg-center flex items-center justify-center">
        <div className="container flex items-center justify-center">
          <div className="flex bg-[#F7F8FACC] w-[70%] flex-col gap-4 px-[95px] py-[60px]">
              <h1 className='text-[#1D252C] text-4xl text-center'>
              The nature candle
              </h1>
              <p className='text-[18px] text-[#1D252C] text-center'>
                All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments 
              </p>
              <div className="flex justify-center">
                <button className='bg-[#56B280] text-white px-11 py-2'>Discovery our collection</button>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Hero