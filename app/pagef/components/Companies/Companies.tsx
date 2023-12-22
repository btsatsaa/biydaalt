"use client";
import Image from "next/image";
import { Input } from "postcss";
import React, { Component } from "react";
import Slider from "react-slick";
import { FcCallback, FcBusinessman } from "react-icons/fc";
import Document, { Html, Head, Main, NextScript } from "next/document";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'next-bootstrap/Form';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { Placeholder } from "react-bootstrap";
// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: string;
}

const data: Data[] = [
  {
    imgSrc: "/assets/carousel/airbnb.svg",
  },
  {
    imgSrc: "/assets/carousel/fedex.svg",
  },
  {
    imgSrc: "/assets/carousel/google.svg",
  },
  {
    imgSrc: "/assets/carousel/hubspot.svg",
  },
  {
    imgSrc: "/assets/carousel/microsoft.svg",
  },
  {
    imgSrc: "/assets/carousel/walmart.svg",
  },
  {
    imgSrc: "/assets/carousel/airbnb.svg",
  },
  {
    imgSrc: "/assets/carousel/fedex.svg",
  },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    // baiguullagiin hvselt ilgeeh

    return (
      <div className="text-center my-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-midnightblue text-2xl font-semibold">
            Манай вебтэй хамтрагч байгууллагууд
          </h2>
          <div className="py-14">
            {/* <Slider {...settings}>
                {data.map((item, i) => (
                  <div key={i}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgSrc}
                      width={116}
                      height={36}
                    />
                  </div>
                ))}
              </Slider> */}
          </div>

          <div className="vg">
            Түнш болох хүсэлт илгээх
            <style id="vg "></style>
          </div>
          <div>
            Та бидэнтэй хамтран ажиллахыг хүсч байвал дараах мэдээллийг бидэнд
            илгээнэ үү.
          </div>

          <div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Байгууллагын нэр"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                <FaGoogle></FaGoogle>
              </InputGroup.Text>
              <Form.Control
                placeholder="Имейл хаяг"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>

            {/* <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label> */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                <FaFacebook></FaFacebook>
              </InputGroup.Text>
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="facebook"
                aria-label="Recipient's username"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                <FcCallback></FcCallback>
              </InputGroup.Text>

              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Утас"
                aria-label="Recipient's username"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                <FcBusinessman></FcBusinessman>
              </InputGroup.Text>

              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Нэр"
                aria-label="Recipient's username"
              />
            </InputGroup>

            {/* <Form.Control id="basic-url" aria-describedby="basic-addon3" /> */}
            <InputGroup>
              <InputGroup.Text>Санал </InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
          </div>
        </div>
        <div className=" flex inset-y-5px justify-center">
          <Button variant="secondary">Илгээх</Button>{" "}
        </div>
      </div>
    );
  }
}
