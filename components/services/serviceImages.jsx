import Link from "next/link";



import findProperties from "../../data/findProperties";

const ServiceImages = ({images}) => {


const imagesdata = images?.length > 0 ? images : findProperties

  return (
    <>
    {!images?.length > 0 ? 

    <>

    
      
    { findProperties.slice(0, 4).map((item) => (
        <div className={`col-lg-4   ${item?.column}`} key={item.id}>
          {/* <Link href="/"> */}
            <a className="properti_city d-block">
              <div className="thumb">
                <img className="img-fluid w100" src=
                {item?.img}
                // {item?.img} 
                
                alt="pc1.jpg" />
              </div>
              <div className="overlay">
                <div className="details">
                  <h4>{item?.name}</h4>
                  <p>{item?.number} Properties</p>
                </div>
              </div>
            </a>
          {/* </Link> */}
        </div>
      ))}

</>
      :

<div className=" py-2 grid grid-cols-1 md:grid-cols-2 gap-4">


{   images.slice(0, 4).map((item) => (
        <div 
        key={item?.name}
        className={`    `}>
          {/* <Link href="/"> */}
            <a className="properti_city d-block">
              <div className="thumb  h-[400px] w-full">
                <img className="img-fluid  w-full h-full   object-cover " src=
                {item}
                // {item?.img} 
                
                alt="pc1.jpg" />
              </div>
              <div className="overlay">
                <div className="details">
                  <h4>{item?.name}</h4>
                  <p>{item?.number} Properties</p>
                </div>
              </div>
            </a>
          {/* </Link> */}
        </div>
      ))}





</div>

}

    </>
  );
};

export default ServiceImages ;
