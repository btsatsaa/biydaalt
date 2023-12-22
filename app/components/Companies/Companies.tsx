"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import { FcCallback, FcBusinessman } from "react-icons/fc";

import { FaFacebook, FaGoogle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";

// IMAGES DATA FOR CAROUSEL

interface Data {
  imgSrc: string;
}

const data1: Data[] = [
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
interface OrganizationDataInsert {
  orga_name: string;
  orga_mail: string;
  orga_fb: string;
  orga_phone: number;
  orga_users_name: string;
  orga_feedback: string;
}
const Companies = () => {
  const [data, setData] = useState<OrganizationDataInsert[]>([]);
  const [formData, setFormData] = useState({
    orga_name: "",
    orga_mail: "",
    orga_fb: "",
    orga_phone: "",
    orga_users_name: "",
    orga_feedback: "",
  });
  const handleClear = () => {
    setFormData({
      orga_name: "",
      orga_mail: "",
      orga_fb: "",
      orga_phone: "",
      orga_users_name: "",
      orga_feedback: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddOrder = async () => {
    try {
      const response = await fetch("/api/organizationDataInsert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setData((prevData) => [...prevData, result.data]);

      alert("Амжилттай илгээгдсэн ");
      handleClear();
      console.log(result);
    } catch (error) {
      console.error("Хэрэглэгч нэмэхэд алдаа гарлаа:", error);
    }
  };
  // CAROUSEL SETTINGS
  // export default class MultipleItems extends Component {
  //   render() {
  //     const settings = {
  //       dots: false,
  //       infinite: true,
  //       slidesToShow: 4,
  //       slidesToScroll: 1,
  //       arrows: false,
  //       autoplay: true,
  //       speed: 1000,
  //       autoplaySpeed: 1000,
  //       cssEase: "linear",
  //       responsive: [
  //         {
  //           breakpoint: 1024,
  //           settings: {
  //             slidesToShow: 4,
  //             slidesToScroll: 1,
  //             infinite: true,
  //             dots: false,
  //           },
  //         },
  //         {
  //           breakpoint: 700,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //             infinite: true,
  //             dots: false,
  //           },
  //         },
  //         {
  //           breakpoint: 500,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             infinite: true,
  //             dots: false,
  //           },
  //         },
  //       ],
  //     };
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

        <form onSubmit={handleAddOrder}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Байгууллагын нэр"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="orga_name" // add a name attribute for form submission
              value={formData.orga_name}
              onChange={handleInputChange}
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
              name="orga_mail" // Assign a name to the input field
              type="text"
              value={formData.orga_mail} // Use formData state to get and set the value
              onChange={handleInputChange} // Call handleInputChange when the input changes
            />

            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              <FaFacebook></FaFacebook>
            </InputGroup.Text>
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="facebook"
              aria-label="Recipient's username"
              name="orga_fb" // Assign a name to the input field
              type="text"
              value={formData.orga_fb} // Use formData state to get and set the value
              onChange={handleInputChange} // Call handleInputChange when the input changes
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
              name="orga_phone" // Assign a name to the input field
              type="text"
              value={formData.orga_phone} // Use formData state to get and set the value
              onChange={handleInputChange} // Call handleInputChange when the input changes
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
              name="orga_users_name" // Assign a name to the input field
              type="text"
              value={formData.orga_users_name} // Use formData state to get and set the value
              onChange={handleInputChange} // Call handleInputChange when the input changes
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>Санал </InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              name="orga_feedback" // Add a name attribute for form submission
              value={formData.orga_feedback}
              onChange={handleInputChange}
            />
          </InputGroup>
          {/* ... other input fields ... */}
          {/* <div className=" flex inset-y-5px justify-center">
            <Button type="submit" variant="secondary">
              Илгээх
            </Button>{" "}
          </div> */}
          <div className=" flex inset-y-5px justify-center">
            <Button
              type="button" // Specify the type as "button" to prevent the form from being submitted automatically
              variant="secondary"
              onClick={handleAddOrder}
              // Call the handleAddOrder function when the button is clicked
            >
              Илгээх
            </Button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Companies;
