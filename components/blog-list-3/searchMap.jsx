import React from "react";
import { useState } from "react";
import Router from "next/router";

import { ComposableMap, Geographies, Geography ,Marker } from "react-simple-maps";
import MapData from '../../mapFiles/faatures.json'
import { createGlobalStyle } from "styled-components";




const markers = [
  // {
  //   markerOffset: -3,
  //    name: "turkey",
  //   coordinates: [77.630554, 17.422222]
  // },
  // 38.630554, 27.422222
  { markerOffset: 15, name: "turkey", pro:'Turkey',  coordinates: [ 27.422222 ,38.630554,] },
  { markerOffset: 15, name: "pakistan", pro:'Pakistan' ,coordinates: [74.329376 , 38.630554] },
  { markerOffset: 15, name: "kirgizistan",pro:'Kirgizistan' , coordinates: [38.089420 , 40.166810] },
  { markerOffset: 15, name: "croatia",pro:'Croatia' , coordinates: [15.200000 , 45.099998] },
  { markerOffset: 15, name: "serbia",pro:'Serbia', coordinates: [ 21.005859, 44.016521] },
  { markerOffset: 15, name: "saudi", pro:'Saudi Arabia',coordinates: [45.079163 ,23.885942 ] },
  { markerOffset: 15, name: "emirates",pro:'United Arab Emirates' , coordinates: [55.17128 ,25.0657] },

];




 const MapBlogs = () => { 


  const [selected ,setSelected] = useState('')


  const setLocation = (country) => {



    
    Router.push('/blogs?country=' + country?.name)

setSelected(country)
console.log('country--->' , selected , country?.name)

  }

const geosData = [
'KAZ' , "TUR" 
,"HRV" , 
"ARE",
 "KIR" ,"SA" , "RS" ,"SAU" ,"UZB" ,"PAK"



]



const geosDataFilter = (param) => {



 const is =markers.filter((marker) => { return marker?.pro === param.properties?.name})


 console.log('isTrue', is)


if (is.length) {

return '#ffe033'

}

return '#EEE'

}





return (
  // hidden md:block h-[0px]

    <div className="  md:h-[800px]">
    <ComposableMap 
    className='   text-black mt-24 md:h-[900px]      w-100  border-none'
    >
      <Geographies geography={MapData}>
        {({ geographies }) =>
          geographies.map((geo) => 
          // (
            { 
             // console.log('geographic' ,geo?.properties?.name)
          //    console.log('geo ?????' ,  geosData.includes(geo?.id) ? '#b8614b' :'#EEE'  )
              

return (

            
            <Geography key={geo.rsmKey} geography={geo}
         
            // fill="#EAEAEC"
            // stroke="#D6D6DA"

            style={{
                default: {
                  fill:geosDataFilter(geo) ,
                  outline: "none",
                  hover:geosDataFilter(geo) 
                  // stroke:"#D6D6DA"
               
             

           
                },

               
                //  hover: {
                //   fill:geosDataFilter(geo) ,
                //  },



                // pressed: {
                //   outline: "none",
                // },



                // hover: {
                //   // fill: "#F53"
                //   fill:'none'
                // },


                // pressed: {
                //   fill: "#E42",
                // },
                // {
             



              }}
            
            
            />

 )


          // )
            }
          )
        }
      </Geographies>

      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker 
        onClick={()=> setLocation({name:name})}
        className=" cursor-pointer"
        key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
             transform="translate(1, 1)"
          >
            <circle 
              r={4} fill="#26569c" stroke="#ffffff" strokeWidth={2}   />



            {/* // r={10} fill="#F00" stroke="#fff" strokeWidth={2}
            // cx="12" cy="10" r="3"  */}
            
          
            {/* <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /> */}
          </g>
          <text
          onClick={()=> setLocation({name:name})}
            textAnchor="middle"
            y={markerOffset}
            // style={{ fontFamily: "system-ui", fill: "#5D5A6D"  , color: "#7b5151" , cursor: "pointer" ,fontSize: "8px" }}
          >
            

 

          </text>
        </Marker>
      ))}










    </ComposableMap>
  </div>

  
     )  };


export default MapBlogs










// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker ,
//   Annotation,
// } from "react-simple-maps";
// import {useState} from 'react'
// import Router from "next/router";

// const geoUrl =
// "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
//   // "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

// const MapChart = () => {

// const [selected ,setSelected] = useState('')


//   const setLocation = (country) => {

//     Router.push('/blogs?country=' + country)

// setSelected(country)
// console.log('country--->' , selected , country)

//   }



//   return (
//     <>
//     <div className="  pb-12  mb-12 mt-24  m-auto w-[80%]  ">
  
//     <ComposableMap
  
//     //  width={120}
//     //  height={160}
//     className='hidden  md:block  text-black mt-24 md:h-[900px] bg-red-300 w-100 border-green-400 border-2'
//       projection="geoAlbers"
//       projectionConfig={{
//         scale: 400
//       }}
//     >
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography
//               key={geo.rsmKey}
//               geography={geo}
//               fill="#DDD"
//               stroke="#FFF"
//             />
//           ))
//         }
//       </Geographies>

   



// {/* 
//       <Marker coordinates={[-101, 53]} fill="#777">
//       <circle 
//                 r={8} 
//                 fill="#F00" 
//                 stroke="#fff" 
//                 strokeWidth={2} 
//             />
//         <text  
//         className=" text-black font-bold text cursor-pointer" 
//         onClick={()=> setLocation('serbia')}
//         textAnchor="middle" fill="#F53">
//           serbia
//         </text>
//       </Marker>
//       <Marker coordinates={[-102, 38]} fill="#777">
//       <circle 
//                 r={8} 
//                 fill="#F00" 
//                 stroke="#fff" 
//                 strokeWidth={2} 
//             />
//         <text 
//          onClick={()=> setLocation('kirgistan')}
//          className=" text-black font-bold text cursor-pointer" 
//          textAnchor="middle" fill="#F53">
//           kirgistan
//         </text>
//       </Marker>
//       <Marker coordinates={[-103, 30]} fill="#222">
//       <circle 
//                 r={8} 
//                 fill="#F00" 
//                 stroke="#fff" 
//                 strokeWidth={2} 
//             />
//         <text
//          onClick={()=> setLocation('croatia')}
//          className=" text-black font-bold text cursor-pointer" 
//         textAnchor="middle" fill="#F53">
//           croatia
//         </text>
//       </Marker>

//       <Marker coordinates={[-101, 22]} fill="#777">

//       <circle 
//                 r={8} 
//                 fill="#F00" 
//                 stroke="#fff" 
//                 strokeWidth={2} 
//             />


//         <text
//          onClick={()=> setLocation('emirates')}
//          className=" text-black font-bold text cursor-pointer" 
//         textAnchor="middle" fill="#F53">
//           emirates
//         </text>
//       </Marker>



//       <Marker coordinates={[-101, 26]} fill="#777">

//       <circle 
//                 r={8} 
//                 fill="#F00" 
//                 stroke="#fff" 
//                 strokeWidth={2} 
//             />

//         <text
//          onClick={()=> setLocation('saudi')}
//          className=" text-black font-bold text cursor-pointer" 
//         textAnchor="middle" fill="#F53">
//           saudi arabistan
//         </text>
//       </Marker>



//       <Marker coordinates={[-101, 44]} fill="#c04e4e">

  

//       <circle 
//                 r={8} 
//                 fill="#F00" 
//                 stroke="#fff" 
//                 strokeWidth={2} 
//             />




//         <text
//         className=" text-black   m-2 font-bold text cursor-pointer" 
//           onClick={()=> setLocation('pakistan')}
//         textAnchor="middle" fill="#F53">
//           pakistan
//         </text>
//       </Marker> */}




//       <Marker

      
//       coordinates={ [6.953101, 50.935173]}
//       // coordinates={[41.015137, 28.979530]}
//        fill="#777">
//    <circle 
//                 r={8} 
//                 fill="#F00" 
//                 stroke="#fff" 
//                 strokeWidth={2} 
//             />



//         <text
//          style={{ fontFamily: "system-ui", fill: "#5D5A6D" , marginTop: "-10px"  }}
//          onClick={()=> setLocation('turkey')}
//         className=" text-black font-bold text cursor-pointer" textAnchor="middle" fill="#F53">
//           Turkey
//         </text>
//       </Marker>




//     </ComposableMap>
//     </div>
//     </>
//   );
// };

// export default MapChart;
