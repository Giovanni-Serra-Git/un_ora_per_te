/* eslint-disable react/prop-types */

import Slider from "react-slick";

function ImageSlider({url}) {
  return (
      <div className="w-[300px] h-[300px] bg-gray ml-auto mx-4 mt-8 mb-8 rounded-3xl">
          <img src={url} alt="" />
      </div>
  )
}


function SimpleSlider({props, images}) {

  let imagesToSlide = [
    ...images
  ]

    let {slideToScroll, slideToShow} = props;


    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: +slideToShow,
      slidesToScroll: +slideToScroll,

      responsive: [
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
      ]
    };

    return (
      <div className="mb-8 mt-8">
          <Slider {...settings}>
              {imagesToSlide.map((item, index) => <ImageSlider key={index} url={item} />)}
          </Slider>
      </div>
    );
  }

  export default SimpleSlider;