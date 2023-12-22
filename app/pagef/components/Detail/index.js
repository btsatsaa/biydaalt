"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SwiperCom from "../Swiper/index";
import MyRate from "../Ranking/myRate";
import Link from "next/link";
import Mentor from "../Mentor/index";
import DetailPage from "../DetailPage";

const MyDetail = () => {
  return (
    <div className="mx-auto max-w-7xl pt-2 sm:pb-0 px-0">
      <div id="home-section" className=" text-lg sm:text-sm py-4 lg:py-0 ">
        <h1 className=" bg-lightkblue group-hover:opacity-75  ">
          Сургалтын нэр
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1   ">
          <div className="  col-span-8 aspect-w-1 aspect-h-1 overflow-hidden rounded-lg mx-1  bg-lightkblue group-hover:opacity-75 ">
            <SwiperCom />
          </div>
          <div className="col-span-4 aspect-w-1 aspect-h-1 overflow-hidden rounded-lg mx-1 ">
            <div>
              {" "}
              <DetailPage />
              <MyRate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyDetail;
