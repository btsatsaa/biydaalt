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
    <div className="mx-auto max-w-7xl pt-6 mt-6 sm:pb-0">
      <div className=" text-lg sm:text-sm py-4 mt-6  ">
        <h1 className=" bg-lightkblue  ">Сургалтын нэр</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1   ">
          <div className="  col-span-6 aspect-w-1 aspect-h-1 overflow-hidden rounded-lg mx-1  bg-lightkblue group-hover:opacity-75 ">
            <SwiperCom />
          </div>
          <div className=" col-span-6 ">
            {" "}
            <DetailPage />
            <MyRate />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyDetail;
