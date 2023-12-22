"use client";
import StarRating from "./starRating";
import NavLinks from "../../navlink.tsx";
import { useRouter } from "next/router";
import Detail from "../Detail/index.js";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { FaPhone } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
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
    { name: "huuda", href: "/components/Information" },
    { name: "Та манай сургалтыг үнэлнэ үү?", href: "../Information" },

    // Add more links as needed
  ];

  return (
    <div>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Сургалтын газартай холбогдох</div>
          </div>
          <Badge bg="primary" pill>
            <FaPhone />
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Сургалтын веб сайт</div>
          </div>
          <Badge bg="primary" pill>
            <CgWebsite />
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Сургалтын фейсбүүк хуудас</div>
          </div>
          <Badge bg="primary" pill>
            <FaFacebook />
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      <p className="font-bold">Манай сургалтыг үнэлнэ үү?</p>
      <StarRating onChange={handleRatingChange} />
    </div>
  );
};

export default MyRate;
