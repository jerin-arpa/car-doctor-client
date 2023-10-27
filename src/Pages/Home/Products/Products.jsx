import Rating from 'react-rating';
import image1 from '../../../assets/images/products/1.png';
import image2 from '../../../assets/images/products/2.png';
import image3 from '../../../assets/images/products/3.png';
import image4 from '../../../assets/images/products/4.png';
import image5 from '../../../assets/images/products/5.png';
import image6 from '../../../assets/images/products/6.png';


const Products = () => {
    return (
        <div className='mb-20'>
            <div className="flex justify-center">
                <div className="lg:w-1/2 mb-5">
                    <p className='text-[#FF3811] font-bold pb-4 text-center'>Popular Products</p>
                    <h1 className="text-5xl font-bold  text-center">Browse Our Products</h1>
                    <p className="py-6 text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                </div>
            </div>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={image1} alt="" className="rounded-xl h-72" />
                    </figure>

                    <div className='mt-5 flex justify-center'>
                        <Rating
                            emptySymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                            fullSymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            initialRating={5}
                            readonly
                        />
                    </div>

                    <div className="my-3 mb-10 text-center">
                        <h2 className=" text-3xl font-bold">Car Engine Plug</h2>
                        <p className='text-[#FF3811] font-bold text-xl mt-3'>Price: $20.00</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={image2} alt="" className="rounded-xl h-72" />
                    </figure>
                    <div className='mt-5 flex justify-center'>
                        <Rating
                            emptySymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                            fullSymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            initialRating={4}
                            readonly
                        />
                    </div>

                    <div className="my-3 mb-10 text-center">
                        <h2 className=" text-3xl font-bold">Cools Led Light</h2>
                        <p className='text-[#FF3811] font-bold text-xl mt-3'>Price: $20.00</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={image3} alt="" className="rounded-xl h-72" />
                    </figure>
                    <div className='mt-5 flex justify-center'>
                        <Rating
                            emptySymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                            fullSymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            initialRating={5}
                            readonly
                        />
                    </div>

                    <div className="my-3 mb-10 text-center">
                        <h2 className=" text-3xl font-bold">Cools Led Light</h2>
                        <p className='text-[#FF3811] font-bold text-xl mt-3'>Price: $20.00</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={image4} alt="" className="rounded-xl h-72" />
                    </figure>
                    <div className='mt-5 flex justify-center'>
                        <Rating
                            emptySymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                            fullSymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            initialRating={4}
                            readonly
                        />
                    </div>

                    <div className="my-3 mb-10 text-center">
                        <h2 className=" text-3xl font-bold">Car Engine Plug</h2>
                        <p className='text-[#FF3811] font-bold text-xl mt-3'>Price: $20.00</p>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={image5} alt="" className="rounded-xl h-72" />
                    </figure>
                    <div className='mt-5 flex justify-center'>
                        <Rating
                            emptySymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                            fullSymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            initialRating={3}
                            readonly
                        />
                    </div>

                    <div className="my-3 mb-10 text-center">
                        <h2 className=" text-3xl font-bold">Cools Led Plug</h2>
                        <p className='text-[#FF3811] font-bold text-xl mt-3'>Price: $20.00</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={image6} alt="" className="rounded-xl h-72" />
                    </figure>
                    <div className='mt-5 flex justify-center'>
                        <Rating
                            emptySymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                            fullSymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="orange"
                                    className="w-8 h-8"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            initialRating={4}
                            readonly
                        />
                    </div>

                    <div className="my-3 mb-10 text-center">
                        <h2 className=" text-3xl font-bold">Car Engine Plug</h2>
                        <p className='text-[#FF3811] font-bold text-xl mt-3'>Price: $20.00</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-14">
                <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] hover:rounded-3xl">More Services</button>
            </div>
        </div>
    );
};

export default Products;