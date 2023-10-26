import image1 from '../../../assets/images/banner/1.jpg';
import image2 from '../../../assets/images/banner/2.jpg';
import image3 from '../../../assets/images/banner/3.jpg';
import image5 from '../../../assets/images/banner/5.jpg';



const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[650px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${image1})`, placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
                        <div className="flex items-center ml-10 text-white">
                            <div className="max-w-md">
                                <h2 className='text-4xl lg:text-6xl font-bold'> Affordable Price For Car Servicing</h2>
                                <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col md:flex-row gap-10 pr-8'>
                                    <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${image2})`, placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
                        <div className="flex items-center ml-10 text-white">
                            <div className="max-w-md">
                                <h2 className='text-4xl lg:text-6xl font-bold'> Affordable Price For Car Servicing</h2>
                                <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col md:flex-row gap-10 pr-8'>
                                    <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${image3})`, placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
                        <div className="flex items-center ml-10 text-white">
                            <div className="max-w-md">
                                <h2 className='text-4xl lg:text-6xl font-bold'> Affordable Price For Car Servicing</h2>
                                <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col md:flex-row gap-10 pr-8'>
                                    <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${image5})`, placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
                        <div className="flex items-center ml-10 text-white">
                            <div className="max-w-md">
                                <h2 className='text-4xl lg:text-6xl font-bold'> Affordable Price For Car Servicing</h2>
                                <p className='my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col md:flex-row gap-10 pr-8'>
                                    <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline border-white text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;