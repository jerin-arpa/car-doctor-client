import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { RxAvatar } from 'react-icons/rx';
import Rating from 'react-rating';
import { BiSolidQuoteRight } from 'react-icons/bi';


const Review = () => {
    return (
        <div className="mb-28">
            <div className="flex justify-center mb-10">
                <div className="lg:w-1/2">
                    <p className='text-[#FF3811] font-bold pb-4 text-center'>Testimonial</p>
                    <h1 className="text-5xl font-bold  text-center">What Customer Says</h1>
                    <p className="py-6 text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                </div>
            </div>


            <div className='w-[250px] md:w-full'>
                <Swiper
                    breakpoints={{
                        320: {
                            width: 320,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 1.5,
                        },
                    }}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div className='bg-base-100 border p-10 m-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div>
                                        <RxAvatar className='text-5xl'></RxAvatar>
                                    </div>
                                    <div>
                                        <h2 className='text-3xl font-bold text-[#FF3811]'>Awlad Hossain</h2>
                                        <p className='text-xl'>Businessman</p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <BiSolidQuoteRight className='text-6xl'></BiSolidQuoteRight>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                            </div>


                            <div className='mt-5'>
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 border p-10 m-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div>
                                        <RxAvatar className='text-5xl'></RxAvatar>
                                    </div>
                                    <div>
                                        <h2 className='text-3xl font-bold text-[#FF3811]'>Awlad Hossain</h2>
                                        <p className='text-xl'>Businessman</p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <BiSolidQuoteRight className='text-6xl'></BiSolidQuoteRight>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                            </div>


                            <div className='mt-5'>
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 border p-10 m-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div>
                                        <RxAvatar className='text-5xl'></RxAvatar>
                                    </div>
                                    <div>
                                        <h2 className='text-3xl font-bold text-[#FF3811]'>Awlad Hossain</h2>
                                        <p className='text-xl'>Businessman</p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <BiSolidQuoteRight className='text-6xl'></BiSolidQuoteRight>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                            </div>


                            <div className='mt-5'>
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 border p-10 m-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div>
                                        <RxAvatar className='text-5xl'></RxAvatar>
                                    </div>
                                    <div>
                                        <h2 className='text-3xl font-bold text-[#FF3811]'>Awlad Hossain</h2>
                                        <p className='text-xl'>Businessman</p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <BiSolidQuoteRight className='text-6xl'></BiSolidQuoteRight>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                            </div>


                            <div className='mt-5'>
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
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Review;