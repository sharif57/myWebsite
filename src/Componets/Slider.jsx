import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
    return (
        <div className="bg-gray-800 mt-14">
            <div className="p-14">
                <h1 className="text-5xl mt-11 text-white font-bold">Discover a variety of innovative portfolio pages!</h1>
                <p className="mt-6 text-white text-center">With our modern page templates, one can effortlessly build a complete site. We designed the inner pages to perfection and in an organized manner, allowing you to quickly and easily customize your site to fit your needs.</p>
            </div>

            <div className='p-6'>
                <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,

                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://i.ibb.co/VShQYs0/Screenshot-2024-07-03-122142.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/jHZ5sJN/Screenshot-2024-07-03-122708.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/DfSZKCJ/Screenshot-2024-07-03-123402.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/tC5LMmc/Screenshot-2024-07-03-133803.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/sPcJCCc/Screenshot-2024-07-03-133935.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/tbX3B6z/Screenshot-2024-07-03-134047.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/NK4mMcZ/Screenshot-2024-07-03-134339.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/vcwH9sD/Screenshot-2024-05-01-222526.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
