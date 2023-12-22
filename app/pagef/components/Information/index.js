// import Image from "next/image";
// import Link from "next/link";
import { text } from "stream/consumers";
import Courses from "../Courses/index";

import Form from "react-bootstrap/Form";
import {
  FcCallback,
  FcBusinessman,
  fafalongarrowright,
  FaFacebook,
} from "react-icons/fc";

import InputGroup from "react-bootstrap/InputGroup";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GoogleMap from "../../components/GoogleMap/index";
import { SearchBox } from "../Search";
import ListCard from "../List/index";
import NamesList from "../Filter/index";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Mentor from "../Mentor/index";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

// import NamesList from "../Courses/index";

const Information = () => {
  return (
    <div id="home-section" className="bg-lightkblue">
      <div className=" my-20 py-1 mx-auto max-w-7xl pt-2 sm:pb-0 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6  bg-white sm:grid-cols-2 lg:grid-cols-4">
            {/* <div className=" justify-between flex pb-12 mt-10">
              <div className="">
                <Form.Select>
                  <option>Сургалтын төрөл</option>
                  <option>Сагсан бөмбөг</option>
                  <option>Гар бөмбөг</option>
                  <option>Агаарын теннис</option>
                  <option>Шатар</option>
                </Form.Select>
              </div>
              <div className="">
                <Form.Select>
                  <option>Оршин суугаа дүүрэг</option>
                  <option>Баянзүрх дүүрэг</option>
                  <option>Баянгол дүүрэг</option>
                  <option>Чингэлтэй дүүрэг</option>
                  <option>Хан-Уул дүүрэг</option>
                </Form.Select>
              </div>
            </div> */}
            <div>
              <NamesList />
            </div>
          </div>

          <div className="col-span-6 justify-center">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
