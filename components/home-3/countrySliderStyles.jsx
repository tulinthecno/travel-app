import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import { featuresData } from "../../data/features";
import { countries } from "../../data/countries";

const CountrySliderStyles = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },



      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-countries">
      <Slider {...settings} arrows={true}>
  
      {countries.slice(0, 6).map((item) => (
          <div className="item" key={item.id}>
            <div className="feat_property home3  h-[377px] md:lg:h-[466] lg:h-[488px] ">
            <Link  href={item?.items[0].routerPath}>
              <div className="thumb h-[79%]">
                <img className="img-wh  h-full w-full object-cover" src={item.image} alt="fp1.jpg" />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
               
                  </ul>

                </div>
              </div>
              </Link>

              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4 dir="rtl" className=" pr-4  font-arabic">
                    <Link  href={item?.items[0].routerPath}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
              
                </div>
              </div>
            </div>
          </div>
        ))} 





      </Slider>
    </div>
  );
};

export default CountrySliderStyles;
