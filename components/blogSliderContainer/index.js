import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import BlogSingle from '../blogSingle'

const BlogSlider = ({ posts }) => {
  const slider = useRef(null)
  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        centerMode: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="container mx-auto">
      <div className="pt-[70px]">
        <h2 className="font-poppins text-center text-textColor text-[24px] lg:text-[32px] lg:leading-[60px]">
          Blog Posts
        </h2>
      </div>
      <div className="overflow-x-hidden">
        <Slider
          ref={slider}
          {...sliderSettings}
          className="postsSlider">
          {posts.map((single, i) => (
              <BlogSingle
                key={i}
                single={single}
              />
            ))}
        </Slider>
      </div>
      <div className="flex justify-center content-center items-center">
        <button
          aria-label="Previous"
          className="text-textColor mx-[15px] text-[19px]"
          onClick={() => slider?.current?.slickPrev()}>
          <AiOutlineArrowLeft />
        </button>
        <button
          aria-label="Next"
          className="text-textColor mx-[15px] text-[19px]"
          onClick={() => slider?.current?.slickNext()}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  )
}

export default BlogSlider
