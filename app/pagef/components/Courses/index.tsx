// "use client";
// import Slider from "react-slick";
// import React, { Component } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { StarIcon } from "@heroicons/react/24/solid";
// import Button from "react-bootstrap/Button";

// import Payment from "../Payment/payment";
// import Form from "react-bootstrap/Form";

// // CAROUSEL DATA

// interface DataType {
//   heading: string;
//   heading2: string;
//   imgSrc: string;
//   name: string;
//   students: number;
//   classes: number;
//   price: number;
//   rating: number;
// }

// const postData: DataType[] = [
//   {
//     heading: "Full stack modern",
//     heading2: "javascript",
//     name: "Colt stelle",
//     imgSrc: "/assets/courses/courseone.png",
//     students: 150,
//     classes: 12,
//     price: 20,
//     rating: 4.7,
//   },
//   {
//     heading: "Design system",
//     heading2: "with React programme",
//     name: "Colt stelle",
//     imgSrc: "/assets/courses/coursetwo.png",
//     students: 130,
//     classes: 12,
//     price: 20,
//     rating: 4.7,
//   },
//   {
//     heading: "Design banner",
//     heading2: "with Figma",
//     name: "Colt stelle",
//     imgSrc: "/assets/courses/coursethree.png",
//     students: 120,
//     classes: 12,
//     price: 20,
//     rating: 4.7,
//   },
//   {
//     heading: "We Launch Delia",
//     heading2: "Webflow this Week!",
//     name: "Colt stelle",
//     imgSrc: "/assets/courses/courseone.png",
//     students: 150,
//     classes: 12,
//     price: 20,
//     rating: 4.7,
//   },
//   {
//     heading: "We Launch Delia",
//     heading2: "Webflow this Week!",
//     name: "Colt stelle",
//     imgSrc: "/assets/courses/coursetwo.png",
//     students: 150,
//     classes: 12,
//     price: 20,
//     rating: 4.7,
//   },
//   {
//     heading: "We Launch Delia",
//     heading2: "Webflow this Week!",
//     name: "Colt stelle",
//     imgSrc: "/assets/courses/coursethree.png",
//     students: 150,
//     classes: 12,
//     price: 20,
//     rating: 4.7,
//   },
// ];

// // CAROUSEL SETTINGS

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 3,
//       // centerMode: true,
//       slidesToScroll: 2,
//       arrows: false,
//       autoplay: false,
//       speed: 500,
//       cssEase: "linear",
//       responsive: [
//         {
//           breakpoint: 1200,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: false,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: false,
//           },
//         },
//       ],
//     };

//     return (
//       <div id="courses">
//         <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 ">
//           <div className="sm:flex justify-between items-center">
//             <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">
//               Popular courses.
//             </h3>
//             <Link
//               href={"/"}
//               className="text-Blueviolet text-lg font-medium space-links"
//             >
//               Explore courses&nbsp;&gt;&nbsp;
//             </Link>
//           </div>

//           <Slider {...settings}>
//             {postData.map((items, i) => (
//               <div key={i}>
//                 <div className="bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl">
//                   <div className="relative rounded-3xl">
//                     <Image
//                       src={items.imgSrc}
//                       alt="gaby"
//                       width={389}
//                       height={262}
//                       className="m-auto clipPath"
//                     />
//                     <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
//                       <h3 className="text-white uppercase text-center text-sm font-medium">
//                         best <br /> seller
//                       </h3>
//                     </div>
//                   </div>

//                   <div className="px-3">
//                     <h4 className="text-2xl font-bold pt-6 text-black">
//                       {items.heading}
//                     </h4>
//                     <h4 className="text-2xl font-bold pt-1 text-black">
//                       {items.heading2}
//                     </h4>

//                     <div>
//                       <h3 className="text-base font-normal pt-6 opacity-75">
//                         {items.name}
//                       </h3>
//                     </div>

//                     <div className="flex justify-between items-center py-6">
//                       <div className="flex gap-4">
//                         <h3 className="text-red text-22xl font-medium">
//                           {items.rating}
//                         </h3>
//                         <div className="flex">
//                           <StarIcon className="h-5 w-5 text-gold" />
//                           <StarIcon className="h-5 w-5 text-gold" />
//                           <StarIcon className="h-5 w-5 text-gold" />
//                           <StarIcon className="h-5 w-5 text-gold" />
//                           <StarIcon className="h-5 w-5 text-gold" />
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="text-3xl font-medium">${items.price}</h3>
//                       </div>
//                     </div>

//                     <hr style={{ color: "#C4C4C4" }} />

//                     <div className="flex justify-between pt-6">
//                       <div className="flex gap-4">
//                         <Image
//                           src={"/assets/courses/book-open.svg"}
//                           alt="users"
//                           width={24}
//                           height={24}
//                           className="inline-block m-auto"
//                         />
//                         <h3 className="text-base font-medium text-black opacity-75">
//                           {items.classes} classes
//                         </h3>
//                       </div>
//                       <div className="flex gap-4">
//                         <Image
//                           src={"/assets/courses/users.svg"}
//                           alt="users"
//                           width={24}
//                           height={24}
//                           className="inline-block m-auto"
//                         />
//                         <h3 className="text-base font-medium text-black opacity-75">
//                           {items.students} students
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <Payment />
//                 <div className=" text-center flex-1 ">
//                   <Button variant="dark">
//                     <a href="">Дэлгэрэнгүйг харах</a>
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     );
//   }
// }

"use client";
import * as React from "react";
import { useState } from "react";
// import Element from "../Element/index";
// import Companies from "../Companies/Companies";
import Companies from "../Companies/Companies";
import Link from "next/link";
import { text } from "stream/consumers";
import Head from "next/head";
import axios from "axios";
// import { useState } from "react";

import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { SearchBox } from "../../components/Search";
import { FcCallback, FcBusinessman } from "react-icons/fc";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { title } from "process";

interface Name {
  course: string;
  imageSrc: string;
  profession: string;
  price: string;
  category:
    | "mobiledevelopment"
    | "webdevelopment"
    | "datascience"
    | "cloudcomputing";
}

const names: Name[] = [
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/volleyball.svg",
    profession: "Гар бөмбөгийн сургалт",
    price: "80",
    category: "webdevelopment",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/basket.svg",
    profession: "Сагсан бөмбөг ",
    price: "21",
    category: "webdevelopment",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/bad.png",
    profession: "Агаарын теннисийн сургалт",
    price: "21",
    category: "webdevelopment",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/бөх.jpg",
    profession: "Үндэсний бөхийн сургалт",
    price: "99",
    category: "webdevelopment",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesOne.svg",
    profession: "Бүжгийн дугуйлан",
    price: "89",
    category: "mobiledevelopment",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesThree.svg",
    profession: "Жүжгийн сургалт",
    price: "89",
    category: "mobiledevelopment",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesFour.svg",
    profession: "Hip Hop Дууны сургалт",
    price: "69",
    category: "mobiledevelopment",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesTwo.svg",
    profession: "Уран зохиол",
    price: "69",
    category: "mobiledevelopment",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesTwo.svg",
    profession: "Математикийн сургалт",
    price: "99",
    category: "datascience",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesFour.svg",
    profession: "Физикийн сургалт",
    price: "99",
    category: "datascience",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesOne.svg",
    profession: "Монгол хэлний сургалт",
    price: "99",
    category: "datascience",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesThree.svg",
    profession: "Шатрын дугуйлан",
    price: "89",
    category: "datascience",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesThree.svg",
    profession: "Англи хэлний сургалт",
    price: "21",
    category: "cloudcomputing",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesFour.svg",
    profession: "Япон хэлний сургалт",
    price: "29",
    category: "cloudcomputing",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesOne.svg",
    profession: "Солонгос хэлний сургалт",
    price: "99",
    category: "cloudcomputing",
  },
  {
    course: "анхан дунд гүнзгий шат",
    imageSrc: "/assets/courses/coursesTwo.svg",
    profession: "Франц хэлний сургалт",
    price: "58",
    category: "cloudcomputing",
  },
];

const NamesList = () => {
  const [selectedButton, setSelectedButton] = useState<
    | "mobiledevelopment"
    | "webdevelopment"
    | "datascience"
    | "cloudcomputing"
    | "all"
    | null
  >("webdevelopment");

  const mobileDevelopment = names.filter(
    (name) => name.category === "mobiledevelopment"
  );
  const webDevelopment = names.filter(
    (name) => name.category === "webdevelopment"
  );
  const dataScience = names.filter((name) => name.category === "datascience");
  const cloudComputing = names.filter(
    (name) => name.category === "cloudcomputing"
  );
  //////////search  course//////

  let selectedNames: Name[] = [];

  if (selectedButton === "mobiledevelopment") {
    selectedNames = mobileDevelopment;
  } else if (selectedButton === "webdevelopment") {
    selectedNames = webDevelopment;
  } else if (selectedButton === "datascience") {
    selectedNames = dataScience;
  } else if (selectedButton === "cloudcomputing") {
    selectedNames = cloudComputing;
  }
  const info = [
    {
      title: "дэлгэрэнгүй харах",
      list: [
        {
          title: "дэлгэрэнгүй харах",
          path: "/app/components/Information/index.js",
        },
      ],
    },
  ];
  const nameElements = selectedNames.map((name, index) => (
    <div key={index}>
      <div className=" text-lg sm:text-sm py-0 lg:py-0">
        <a>
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <img
              src={name.imageSrc}
              alt={name.imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </a>

        <div className="flex justify-between">
          <div className="mt-6 block font-normal text-gray-900">
            {name.course}
          </div>
          <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
            ${name.price}
          </div>
        </div>
        <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
          {name.profession}
        </p>

        <div className="flex justify-between border-solid border-2 border-grey500 rounded-md p-2">
          <p>Анги дүүргэлт 20 хүүхэд</p>
          <div className="flex flex-row space-x-4">
            <div className="flex">
              <img src={"/assets/courses/account.svg"} alt="circle" />
              {/* <p className="text-lightgrey ml-1">120</p> */}
            </div>
            <div className="flex">
              <img src={"/assets/courses/Star.svg"} alt="star" />
              <img src={"/assets/courses/Star.svg"} alt="star" />
              <img src={"/assets/courses/Star.svg"} alt="star" />
              <img src={"/assets/courses/Star.svg"} alt="star" />
              {/* <p className="ml-1">4.5</p> */}
            </div>
          </div>
        </div>
        <div>
          {" "}
          <a href="/">Дэлгэрэнгүй харах</a>
        </div>
      </div>
    </div>
  ));

  <div>{/* <Element /> */}</div>;
  return (
    <div>
      <div
        id="courses-section"
        className=" mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <Container>
          <Row className="flex gap-5 ">
            <Col>
              <div className="  sm:flex justify-between items-center pb-12 ">
                <h2 className=" flex gap-2 text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4  ">
                  <FcBusinessman></FcBusinessman>
                  Манай сургалтууд
                </h2>
              </div>
            </Col>
            {/* <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
              Explore Classes
            </button> */}
            <Col>
              <SearchBox />
              {/* <div className="  relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-15 lg:pt-0">
                <input
                  type="search"
                  name="q"
                  className="py-6 lg:py-8 text-lg w-full text-black opacity-75 rounded-full pl-8 focus:outline-none focus:text-black"
                  placeholder="Сургалтаа хайна уу ?..."
                  autoComplete="on"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-5 lg:pt-0">
                  <button
                    type="submit"
                    className="p-30 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full"
                  >
                    <Image
                      src={"/assets/banner/search.svg"}
                      alt="inputicon"
                      width={30}
                      height={30}
                    />
                  </button>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>

        <div className="flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto">
          {/* FOR DESKTOP VIEW */}
          <button
            onClick={() => setSelectedButton("webdevelopment")}
            className={
              "bg-white " +
              (selectedButton === "webdevelopment"
                ? "text-black border-b-2 border-orange"
                : "text-lightgrey") +
              " pb-2 text-lg hidden sm:block"
            }
          >
            Спорт
          </button>
          <button
            onClick={() => setSelectedButton("mobiledevelopment")}
            className={
              "bg-white " +
              (selectedButton === "mobiledevelopment"
                ? "text-black border-b-2 border-orange"
                : "text-lightgrey") +
              " pb-2 text-lg hidden sm:block"
            }
          >
            Урлаг
          </button>
          <button
            onClick={() => setSelectedButton("datascience")}
            className={
              "bg-white " +
              (selectedButton === "datascience"
                ? "text-black border-b-2 border-orange"
                : "text-lightgrey") +
              " pb-2 text-lg hidden sm:block"
            }
          >
            Боловсрол
          </button>
          <button
            onClick={() => setSelectedButton("cloudcomputing")}
            className={
              "bg-white " +
              (selectedButton === "cloudcomputing"
                ? "text-black border-b-2 border-orange"
                : "text-lightgrey") +
              " pb-2 text-lg hidden sm:block"
            }
          >
            Хэлний сургалт
          </button>

          {/* FOR MOBILE VIEW */}
          <GlobeAltIcon
            onClick={() => setSelectedButton("webdevelopment")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "webdevelopment"
                ? "border-b-2 border-orange fill-orange"
                : "") +
              " pb-2 block sm:hidden"
            }
          />
          <DevicePhoneMobileIcon
            onClick={() => setSelectedButton("mobiledevelopment")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "mobiledevelopment"
                ? "border-b-2 border-orange fill-orange"
                : "") +
              " pb-2 block sm:hidden"
            }
          />
          <CircleStackIcon
            onClick={() => setSelectedButton("datascience")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "datascience"
                ? "border-b-2 border-orange fill-orange"
                : "") +
              " pb-2 block sm:hidden"
            }
          />
          <CloudIcon
            onClick={() => setSelectedButton("cloudcomputing")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "cloudcomputing"
                ? "border-b-2 border-orange fill-orange"
                : "") +
              " pb-2 block sm:hidden"
            }
          />
        </div>

        <div>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
              <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                {nameElements.length > 0 ? (
                  nameElements
                ) : (
                  <p>Өгөгдөл олдоогүй</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamesList;
