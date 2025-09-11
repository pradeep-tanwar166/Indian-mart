import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function Banner() {
  return (
    <div className='m-4'> <Swiper navigation={true} loop={true}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Navigation,Autoplay]} className="mySwiper">
        <SwiperSlide><img src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/59b4a42945833492.jpg?q=60" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/a78c6a347d7ad32c.jpg?q=60" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/c52f71e3e399af41.jpeg?q=60" alt="" /></SwiperSlide>

      
      </Swiper></div>
  )
}

export default Banner
