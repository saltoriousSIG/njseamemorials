import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <Slider {...settings}>
      <div className="p-4 bg-white rounded-md max-w-[500px] bg-[#f6f6f6]">
        <p className="text-gray-500 text-black italic">
          "Experiencing NJ Sea Memorial’s sea burial was beyond our
          expectations. The Dauntless provided a comfortable and serene setting
          for our family and friends. Saying our final goodbyes with the ocean
          and sunset in the background was breathtaking. Highly recommend this
          service."
        </p>
        <div className="h-[50px] w-[185px] my-4 mx-auto">
          <img src="/assets/decorator-2.png" />
        </div>
        <p className="mt-4 text-black font-bold">
          - Jessica M. - Point Pleasant Beach, NJ
        </p>
      </div>
      <div className="p-4 rounded-md max-w-[500px] bg-[#f6f6f6]">
        <p className="text-gray-500 text-black italic">
          "We chose NJ Sea Memorial Service for my father's sea burial, and it
          was a decision we'll always be grateful for. The Nearfall was perfect
          for my small family and the entire experience was carefully crafted
          and Captain Joe was incredibly flexible with our requests. I can't
          recommend NJ Sea Memorial service enough"
        </p>
        <div className="h-[50px] w-[185px] my-4 mx-auto">
          <img src="/assets/decorator-2.png" />
        </div>
        <p className="mt-4 text-black font-bold">
          - David P. - Belmar, NJ
        </p>
      </div>
      <div className="p-4 bg-white rounded-md max-w-[500px] bg-[#f6f6f6]">
        <p className="text-gray-500 text-black italic">
          "An amazing experience aboard the Dauntless. I had never been a part
          of an ash scattering before and NJ Sea Memorial service made it so
          easy for me. Highly recommended for families seeking an alternative
          and heartfelt way to say their final goodbyes."
        </p>
        <div className="h-[50px] w-[185px] my-4 mx-auto">
          <img src="/assets/decorator-2.png" />
        </div>
        <p className="mt-4 text-black font-bold">
          - Rebecca K. - Manahawkin, NJ
        </p>
      </div>
    </Slider>
  );
};

export default Carousel;
