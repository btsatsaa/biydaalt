import React from "react";
import Image from "next/image";
import Next from "next";
import Form from "react-bootstrap/Form";
export const SearchBox = (props) => (
  <div className="  relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-15 lg:pt-0">
    <input
      type="search"
      name="search-box"
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
  </div>
);
///////
// const SearchBox = ({ searchTerm, setSearchTerm }) => {
//   return (
//     <div className="mt-4 mb-4">
//       <input
//         type="text"
//         placeholder="Search lessons..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="p-2 border border-gray-300 rounded-md"
//       />
//     </div>
//   );
// };

// export default SearchBox;
