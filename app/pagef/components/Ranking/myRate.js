"use client";
import StarRating from "./starRating";
import NavLinks from "../../navlink.tsx";
import { useRouter } from "next/router";
import Detail from "../Detail/index.js";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

const MyRate = () => {
  const handleRatingChange = (selectedRating) => {
    // Handle the rating change (e.g., save it to state, send it to the server, etc.)
    console.log(`Selected rating: ${selectedRating}`);
  };
  const handleClick = () => {
    const router = useRouter();
    router.push("/Information");
  };
  const links = [
    { name: "huuda", href: "/page" },
    { name: "Та манай сургалтыг үнэлнэ үү?", href: "../Information" },

    // Add more links as needed
  ];

  return (
    <div>
      <h1>Та манай сургалтыг үнэлнэ үү?</h1>
      <NavLinks links={links} onClick={handleClick} />
      <StarRating onChange={handleRatingChange} />
    </div>
  );
};

export default MyRate;
