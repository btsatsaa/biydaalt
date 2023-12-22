"use client";

import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import Image from "react-bootstrap/Image";
// import SearchBox from "../Search/index";
import { FcCallback, FcBusinessman } from "react-icons/fc";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { title } from "process";
import { useState, useEffect } from "react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyTugrik } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";

interface Name {
  lesson_id: string;
  lesson_name: string;
  lesson_price: string;
  lesson_course: string;
  category: "sport" | "urlag" | "edu" | "language";
}

const NamesList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedAddress, setSelectedAddress] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/lessonData");
        const result = await response.json();
        setData(result.data);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  //
  const filteredData = data.filter(
    (item) =>
      item.lesson_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lesson_address.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // const filteredAddresses = addresses.filter((address) =>
  //   address.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  ///////

  return (
    <Container id="home-section" className="container">
      <h1>Та хүссэн сургалтаа хайна уу?</h1>
      {/* <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      /> */}

      <div className="relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-2 lg:pt-0">
        <input
          type="Email address"
          name="q"
          className="py-6 lg:py-8 text-lg w-full text-black opacity-75 rounded-full pl-8 focus:outline-none focus:text-black"
          placeholder="Сургалтаа хайна уу ?...сургалтын нэр болон/дүүрэг"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
      </div>
      {/* <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      {filteredData.map((item, index) => (
        <div key={index}>
          <div className=" text-lg sm:text-sm py-0 lg:py-0 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1   ">
              <div className="  col-span-6 aspect-w-1 aspect-h-1 overflow-hidden rounded-lg mx-1  bg-lightkblue group-hover:opacity-75 ">
                <div>
                  {/* <img
                src={name.imageSrc}
                alt={name.imageSrc}
                className="h-full w-full object-cover object-center"
              /> */}
                  <img
                    src={"/assets/courses/Star.svg"}
                    alt="star"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="col-span-6 bg:{style.bgCustom} ">
                {" "}
                <div className="flex justify-between">
                  <div className=" bg-lightkblue flex mt-2  text-sm font-semibold border-solid border-2 font-semibold border-grey500 rounded-md p-2">
                    <p>Нэр:</p>
                    {item.lesson_name}
                  </div>
                  <div className=" flex gap-1 mt-2 block text-lg font-semibold  border-solid border-green rounded-md ">
                    <div className="mt-2 flex gap-1">
                      <GiMoneyStack />
                    </div>
                    <div>{item.lesson_price}</div>
                    <div className="mt-2">
                      <TbCurrencyTugrik />
                    </div>
                  </div>
                </div>
                <p
                  aria-hidden="true"
                  className=" flex mt-2 block font-normal font-semibold text-gray-900 "
                >
                  <br />
                  Ангилал : {item.lesson_course}
                </p>
                <div className=" flex mt-6 pb-8 block font-normal font-semibold text-gray-900">
                  <CiLocationOn />
                  {item.lesson_address}
                </div>
                <div className="flex justify-between mb-5 pt-4  border-solid border-2 font-semibold border-grey500 rounded-md p-2">
                  <p>{item.lesson_info}</p>
                  <div className="flex flex-row space-x-4 pb-2">
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default NamesList;
//////////filterrrrrrrr///////////
// import { useState, useEffect } from "react";
// import { CiLocationOn } from "react-icons/ci";
// import { TbCurrencyTugrik } from "react-icons/tb";
// import { GiMoneyStack } from "react-icons/gi";
// import { SearchBox } from "../Search";
// import { FcCallback, FcBusinessman } from "react-icons/fc";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";

// const NamesList = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/lessonData");
//         const result = await response.json();
//         setData(result.data);
//         console.log(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredData = data.filter((item) =>
//     item.lesson_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Container id="home-section" className="container">
//       <h1>Manai surgaltuud</h1>

//       {/* Search Box */}
//       {/* <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

//       {filteredData.map((item, index) => (
//         <div key={index}>
//           {/* Your existing code for displaying lessons */}

//           {/* ... */}
//         </div>
//       ))}
//     </Container>
//   );
// };

// export default NamesList;
//////////////////
// Adjust the path based on your project structure

// Import statement for SearchBox (adjust the path based on your project structure)
// import SearchBox from 'path-to-searchbox/SearchBox';

// interface Lesson {
//   lesson_name: string;
//   lesson_price: string;
//   lesson_course: string;
//   lesson_address: string;
//   lesson_info: string;
// }

// const NamesList: React.FC = () => {
//   const [data, setData] = useState<Lesson[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/lessonData");
//         const result = await response.json();
//         setData(result.data);
//         console.log(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredData = data.filter((item) =>
//     item.lesson_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Container id="home-section" className="container">
//       <h1>Manai surgaltuud</h1>

//       {/* Search Box */}
//       {/* <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

//       {filteredData.map((item, index) => (
//         <div key={index}>
//           {/* Your existing code for displaying lessons */}

//           {/* ... */}
//         </div>
//       ))}
//     </Container>
//   );
// };

// export default NamesList;
