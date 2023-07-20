import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Link } from 'gatsby';


export default function Footer({ footer }) {
  console.log("footer", footer)
  return (
    <div className="relative container !max-w-[1290px] mx-auto">
      <div>
        <div className='pt-[90px] pb-[35px] text-center'>
          <h2 className='text-[42px] text-[#767171] uppercase font-semibold pb-[25px]'>لا تفوتوا آخر المستجدات</h2>
          <h2 className='text-[42px] text-[#767171] uppercase font-semibold pb-[35px]'>STAY CONNECTED</h2>
          <div className=' flex justify-center'>
            <div className='w-[85px] h-[85px] bg-[#9E0851] flex items-center justify-center rounded-full mr-6'>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fafcff" className='w-[43px] h-[43px]'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
            </div>
            <div className='w-[85px] h-[85px] bg-[#9E0851] flex items-center justify-center rounded-full mr-6'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#fafcff" className='w-[43px] h-[43px]'><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </div>
            <div className='w-[85px] h-[85px] bg-[#9E0851] flex items-center justify-center rounded-full mr-6'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#fafcff" className='w-[43px] h-[43px]'><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            </div>
            <div className='w-[85px] h-[85px] bg-[#9E0851] flex items-center justify-center rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fafcff" className='w-[43px] h-[43px]'><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </div>
          </div>
          
        </div>
      </div>

      <div>
        <div className='py-[25px]'>
          <div className='border-[1px] border-[#767171]'></div>
        </div>
        <div className='text-center'>
          <h2 className='text-[32px] font-semibold text-[#767171]'>{footer.top_Footer.Title}</h2>
        </div>
        <div className='p-[10px]'>
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {footer.top_Footer.Sponser.map((image, index) => (
              <SwiperSlide key={index}><Link to={image.link}><img src={`${process.env.PUBLIC_SITE_URL}${image.Image.data.attributes.url}`} alt={image.alt} /></Link></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <div className='py-[25px]'>
          <div className='border-[1px] border-[#767171]'></div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='px-[20px] flex items-center '>
            <div className='w-full'>
              {
                footer.middle_Footer.left.map((label, index) => (
                  <div key={index} className='text-sm font-semibold text-[#767171] py-[13px] px-[20px] uppercase flex justify-end'>
                    <Link to={`https://thebrideshow.com${label.link}`}>{label.label}</Link>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <img src={`https://strapi-zpuw.onrender.com${footer.middle_Footer.middle.data.attributes.url}`} alt="logo" />
          </div>
          <div className='px-[20px] flex items-center '>
            <div className='w-full'>
              {
                footer.middle_Footer.right.map((label, index) => (
                  <div key={index} className='text-sm font-semibold text-[#767171] py-[13px] px-[20px] uppercase flex justify-start'>
                    <Link to={`https://thebrideshow.com${label.link}`}>{label.label}</Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='p-[10px] text-center text-[#767171] font-normal'>
          <p>{footer.Copyright_Title}</p>
        </div>
        <div className='p-[10px]'>
          <ul className='flex justify-center '>
            {
              footer.bottom_Footer.map((label, index) => (
                <li key={index} className='inline-block relative'><Link to={label.link} className="py-[13px] px-[20px] text-xs font-semibold text-[#767171] hover:after:content-[''] hover:after:absolute hover:after:bottom-[-6px] hover:after:bg-[#767171] hover:after:w-full hover:after:h-[3px] hover:after:left-0">{label.label}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>

  )
}
