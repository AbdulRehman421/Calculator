import React, { useContext } from 'react'
// import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import ProductContext from '../ProductContext';

const SingleProduct = () => {
    let params = useParams();
    const { ProductItems } = useContext(ProductContext)

    const singleItem = ProductItems.filter(item => item.id == params.id);
    let random = Math.floor(Math.random() * 1000)
    console.log(random)
    return (


        <div> <span>  Back </span>
            {
                singleItem.map(item => (

                    <div key={item.id} className='flex'>

                        <div className=' w-40 m-5'>
                            <img src={item.thumbnail} alt={item.title} className='my-3' />
                            {
                                item.images.map(img => (
                                    <div>
                                        <img src={img} alt={item.title} className='my-3' key={random} />
                                    </div>


                                ))


                            }


                        </div>
                        <div className=' m-5 w-1/2'>
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className='px-10 m-10 w-1/3'>
                            <div className='flex justify-between my-5'>
                                <h3 className='text-xl '>
                                    {item.discountPercentage} % Off
                                </h3>
                                <h3>
                                    {item.rating} *
                                </h3>

                            </div>
                            <h2 className=' text-3xl'>
                                {item.title}
                            </h2>
                            <p className='my-10'>
                                {item.description}
                            </p>


                            <div className='flex justify-between'>
                                <div>

                                    <h3 className='text-2xl '>
                                        Rs. {item.price - item.discountPercentage}

                                    </h3>
                                    <h2 className=' line-through mx-5 '>
                                        {item.price}

                                    </h2>
                                </div>
                                <h3>
                                    {item.stock}
                                </h3>

                            </div>

                            <div className=' text-center m-5'>
                                <button className=' p-2 bg-white rounded text-black ml-4 mt-5 mx-5'>Buy Now</button>
                                <button className=' p-2 bg-white rounded text-black ml-4 mt-5 mx-5'>Add to cart</button>

                            </div>

                        </div>
                    </div>
                ))
            }

        </div>

    )
}

export default SingleProduct