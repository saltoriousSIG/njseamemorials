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
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      <div className="p-4 bg-white rounded-md max-w-[500px] bg-[#f6f6f6]">
        <p className="text-gray-500 text-black italic">
          "I was at a loss of how to do this until I met Joe. He guided me
          through the process! The trip itself I will remember for the rest of
          my life! The music, the pictures and a special visitor three miles
          out! I’m not ready yet but when I go I will go with Joe !"
        </p>
        <div>⭐⭐⭐⭐⭐</div>
        <div className="h-[50px] w-[185px] my-4 mx-auto">
          <img src="/assets/decorator-2.png" />
        </div>
        <p className="mt-4 text-black font-bold">
          - Frank Meagher - Point Pleasant Beach, NJ
        </p>
      </div>
      <div className="p-4 rounded-md max-w-[500px] bg-[#f6f6f6]">
        <p className="text-gray-500 text-black italic">
          "I am thankful for NJ Sea Memorials - Nearfall for one last trip to
          sea with my Dad. It was a peaceful, intimate experience where we
          shared stories & memories, laughed and cried, said our good-byes as we
          scattered his ashes at sea. In the process we created new memories we
          will always cherish. Thank you NJ Sea Memorials."
        </p>
        <div>⭐⭐⭐⭐⭐</div>
        <div className="h-[50px] w-[185px] my-4 mx-auto">
          <img src="/assets/decorator-2.png" />
        </div>
        <p className="mt-4 text-black font-bold">- Christine Drake - Belmar, NJ</p>
      </div>
      <div className="p-4 bg-white rounded-md max-w-[500px] bg-[#f6f6f6]">
        <p className="text-gray-500 text-black italic">
          "An amazing experience aboard the Dauntless. I had never been a part
          of an ash scattering before and NJ Sea Memorial service made it so
          easy for me. Highly recommended for families seeking an alternative
          and heartfelt way to say their final goodbyes."
        </p>
        <div>⭐⭐⭐⭐⭐</div>
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
