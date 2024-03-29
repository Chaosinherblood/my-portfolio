import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem Iposem retium jole'
  },
  {
    avatar: AVTR2,
    name: 'Jason',
    review: 'Lorem Iposem retium jole'
  },
  {
    avatar: AVTR3,
    name: 'Alex Berker',
    review: 'Lorem Iposem retium jole'
  },
  {
    avatar: AVTR4,
    name: 'Amy John',
    review: 'Lorem Iposem retium jole'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className='text_center1'>
        <h5>Review From clients</h5>
      </div>
      <div className='text_center'>
        <h2>Testimonials</h2>
      </div>
      <Swiper modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')} className="container testimonials__container"  // install Swiper modules
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>)
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials