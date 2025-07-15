import React from 'react'
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import star from "../../assets/star.svg"
const Testimonials = () => {
  return (
    <section className='bg-[#56B2801A] py-[90px]'>
        <div className="container">
                 <h2 className='text-center text-[0B254B] text-4xl'>Testimonials</h2>
            <h3 className='text-center text-[#5E6E89] text-[18px] mt-4'>Some quotes from our happy customers</h3>
                <div className="grid grid-cols-3 gap-10 mt-[30px]">

                <div className="flex flex-col border border-[#8BA7B229] bg-white rounded-sm p-4">
                    <div className="flex justify-center">
                        <img src={user1} alt="" />
                    </div>
                    <div className="flex gap-2 justify-center">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div>
                        <h3 className='text-center text-[#1D293F] text-[22px] mb-2 mt-4'>
                            “I love it! No more air fresheners”
                        </h3>
                        <p className='text-[#7C8087] text-[18px] text-center'>
                            Luisa
                        </p>
                    </div>
                </div>

                <div className="flex flex-col border border-[#8BA7B229] bg-white rounded-sm p-4">
                    <div className="flex justify-center">
                        <img src={user2} alt="" />
                    </div>
                    <div className="flex gap-2 justify-center">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div>
                        <h3 className='text-center text-[#1D293F] text-[22px] mb-2 mt-4'>
                            “Raccomended for everyone”
                        </h3>
                        <p className='text-[#7C8087] text-[18px] text-center'>
                           Edoardo
                        </p>
                    </div>
                </div>

                <div className="flex flex-col border border-[#8BA7B229] bg-white rounded-sm p-4">
                    <div className="flex justify-center">
                        <img src={user3} alt="" />
                    </div>
                    <div className="flex gap-2 justify-center">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div>
                        <h3 className='text-center text-[#1D293F] text-[22px] mb-2 mt-4'>
                            “Looks very natural, the smell is awesome”
                        </h3>
                        <p className='text-[#7C8087] text-[18px] text-center'>
                            Mart
                        </p>
                    </div>
                </div>

                </div>
        </div>
    </section>
  )
}

export default Testimonials