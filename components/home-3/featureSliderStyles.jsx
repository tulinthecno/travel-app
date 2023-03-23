import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import { featuresData } from "../../data/features";
// import { countries } from "../../data/countries";

const  FeaturesSliderStyles = () => {
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
  
  {featuresData.slice(0, 12).map((item) => (
      <div className="item" key={item.id}>
        <div className="feat_property home3 w-full  h-[377px] md:lg:h-[466] lg:h-[488px]">
          <div className="thumb h-[77%]">
            <img className="img-wh w-full h-full object-cover" src={item.img} alt="fp1.jpg" />
            <div className="thmb_cntnt">
              

              <div>
                <p className=" relative  left-[83%] md:left-[82%] lg:left-[88%]  rounded-md inline-block px-2 text-center bg-white  text-[#0038FF] font-arabic  font-semibold">$203</p>
              </div>

             

             
            </div>
          </div>

          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.type}</p>
              <h4  dir="rtl" >
                <Link href={`${item?.link}`}>
                  <a className=" pr-4 py-2 font-arabic">{item.title}</a>
                </Link>
              </h4>
              {/* <p>
                <span dir="rtl" className="  font-semibold   font-mono"></span>
                {item?.text}
              </p> */}

              {/* <ul className="prop_details mb0">
                {item.itemDetails.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {val.number}
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    ))} 





  </Slider>
    </div>
  );
};

export default FeaturesSliderStyles;
