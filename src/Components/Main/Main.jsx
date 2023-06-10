import React,{useEffect} from "react";


import img from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import "./main.css";
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Turquoise lagoons, soft white sands, and deep tangerine sunsets set the scene for romance on the island so nice they named it twice. Mingle with tropical fish as you flutter around Coral Gardens or Tupitipiti Point, or relax in a self-driving tour as you take in beautiful views of the once-volcanic Mount Otemanu. At the Lagoonarium you can watch shark feedings and swim with turtles. Cap it all off with a succulent meal at one of the island’s fine French restaurants, then sip a tropical cocktail under the stars. ",
  },
  {
    id:2,
    imgSrc:img2,
    destTitle: 'Ozen Reserve Bolifushi',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:"OZEN RESERVE BOLIFUSHI is located in a spot of graceful elegance, offering excitement within endless beauty. Hidden beneath lush tropical vegetation, the resort island is surrounded by expansive white beaches and turquoise waters. The resort brings alive the quintessential OZEN COLLECTION experience."
  },
  {
    id:3,
    imgSrc:img3,
    destTitle: 'Hotel Colline de France',
    location:'Brazil',
    grade:'CULTURAL RELAX',
    fees:'$1200',
    description:"Hotel Colline de France is renowned for its charming and comfortable ambiance, offering personalized service that exudes French elegance. It's the perfect place to indulge in a one-of-a-kind experience and explore the attractions of the mountain town of Gramado all year round. Its 34 suites feature an exclusive design with meticulously crafted furniture, intricately painted details in gold or silver tones, and rooms that are delicately scented with a personalized fragrance.  "
  },
  {
    id:4,
    imgSrc:img4,
    destTitle: 'Shangri-La The Shard, London',
    location:'United Kingdom',
    grade:'CULTURAL RELAX',
    fees:'$500',
    description:"Feel an unparalleled connection at Shangri-La The Shard, London. Stay in the capital’s highest hotel, in one of the world’s most iconic buildings, whilst enjoying panoramic skyline views that connect you to the whole city. This is the only five-star luxury hotel in London Bridge, contrasting sleek modern style with the area’s rich historic character. "
  },
  {
    id:5,
    imgSrc:img5,
    destTitle: 'The Ritz-Carlton, Hong Kong',
    location:'Hong Kong',
    grade:'CULTURAL RELAX',
    fees:'$1300',
    description:"Occupying floors 102 to 118 of the International Commerce Centre in Kowloon, The Ritz-Carlton, Hong Kong, is the highest hotel in the world. The 5-star Hong Kong hotel's 312 guestrooms offer spectacular city and harbor views. The hotel offers guests an epicurean journey in the sky with its six distinctive dining venues, including state-of-the-art Michelin-starred Italian restaurant Tosca di Angelo and Michelin two-starred Chinese restaurant Tin Lung Heen as "
  },
  {
    id:6,
    imgSrc:img6,
    destTitle: 'JW Marriott Marquis Hotel Dubai',
    location:'United Arab Emirates',
    grade:'CULTURAL RELAX',
    fees:'$1800',
    description:"Dubai is a city of awe-inspiring ambition and unsurpassed luxury, home to the world's tallest building, the largest shopping mall, the iconic Palm, and JW Marriott Marquis Hotel Dubai - the worlds tallest hotel. It is a place where dreams come true, as is our hotel in Dubai. JW Marriott Marquis Hotel Dubai offers a spectrum of business facilities for the most discerning travelers. "
  },
  {
    id:7,
    imgSrc:img7,
    destTitle: 'Ikos Dassia',
    location:'Greece',
    grade:'CULTURAL RELAX',
    fees:'$1000',
    description:"Ikos Dassia is a new 5 star resort, built in a luxurious, contemporary Mediterranean style, located on the beachfront setting of Dassia beach, on Corfu Island, with its own long sandy beach. Ikos Dassia applies the highest standards of quality, service and entertainment, design and style- according to the award-winning ‘Infinite Lifestyle’ concept. The resort includes 411 spacious rooms and suites, 2 main buildings with bedrooms and the resort's "
  },
  {
    id:8,
    imgSrc:img8,
    destTitle: 'Padma Resort Ubud',
    location:'Indonesia',
    grade:'CULTURAL RELAX',
    fees:'$300',
    description:"Ensconced within an untouched river valley overlooking the enchanting bamboo forests of Payangan in Ubud; the 149-room Padma Resort Ubud is an expansive destination resort located north of Bali’s celebrated cultural centre. Padma Resort Ubud features the five-star amenities and facilities offered by the renowned Padma hospitality brand including stunning views from every room or suite, an 89-metre infinity swimming pool and signature "
  },
  {
    id:9,
    imgSrc:img9,
    destTitle: 'Tulemar Bungalows & Villas',
    location:'Costa Rica',
    grade:'CULTURAL RELAX',
    fees:'$2000',
    description:"Tulemar is the premier resort development in Manuel Antonio. Gated and secure, the 33 acre jungle resort is perched on the hillside overlooking the Pacific, but continues down all the way to our own beach. It includes our namesake Tulemar Bungalows and our special and unique villas such as Tule Villa, Casa Panorama, Villa Ara Macao, Sunset Hideaway, Dulce Vida Villa, Casa de la Flores, Maunaloa, Casa Heliconia, and many more."
  }
];

const Main = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  




  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destination</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
