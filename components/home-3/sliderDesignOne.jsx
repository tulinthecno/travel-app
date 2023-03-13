import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import { featureSlider1 } from '../../data/properties'

const SliderDesignOne = () => {
  const settings = {
    // dots: true,
    // arrows: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 1200,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,


    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let content = featureSlider1?.slice(0, 4)?.map((item) => (
    <div
      key={item.id}



      className="   md:mt-12  h-[422px] md:h-[555px]    ">


      <div
        className="   w-full h-full"
        style={{
          backgroundImage: item?.bg ? `url('${item?.bg}')` : `url("https://images.unsplash.com/photo-1675855547482-16834b36d4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`,
          backgroundSize: 'cover', backgroundPosition: 'center'
        }}

      >


{/* m-auto w-[80%] lg:w-[33%] h-[80%] */}

        <div className="item pt-[7px] md:pt-12 m-auto w-[80%] lg:w-[33%] h-[80%]  " >
          {/* { bg-black  opacity-[0.6]} */}

          <div className="  pt-12 w-full bg-opacity  h-full mt-[4px] lg:mt-12 rounded-lg">

            {/* -----Content------ */}

            <div

              className={`pt-[14px]  text-center`}>

              <h1 className=" text-[#FCFF81]  font-arabic text-2xl md:text-3xl font-semibold">{item?.title}</h1>

              <h1 className=" text-white  font-arabic leading-[42px]  sm:leading-[49px] text-2xl md:text-[33px] mt-4 md:mt-12 w-[77%] ml-auto mr-auto font-semibold">{item?.desc}</h1>

<h2 className=" text-black text-xl font-semibold rounded-lg  bg-[#FCFF81]  m-auto w-[75%] p-2   sm:p-4 mt-6  font-arabic  hover:bg-yellow-100    duration-100  transition-all">احجز الآن</h2>

            </div>



          </div>



          {/* </div> */}
        </div>


      </div>

    </div>
  ));

  return (
    <div className="mt-12  mb-[1px] SliderOne  overflow-hidden ">
      <Slider {...settings} arrows={true}>
        {content}
      </Slider>
    </div>
  );
};

export default SliderDesignOne;
