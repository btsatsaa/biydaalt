// "use client";

// import React, { Component } from "react";
// import Slider from "react-slick";
// import { FcCallback, FcBusinessman } from "react-icons/fc";

// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
// import { useState } from "react";

// interface OrganizationDataInsert {
//   orga_name: string;
//   orga_mail: string;
//   orga_fb: string;
//   orga_phone: number;
//   orga_users_name: string;
//   orga_feedback: string;
// }
// const [data, setData] = useState<OrganizationDataInsert[]>([]);
// const [formData, setFormData] = useState({
//   orga_name: " ",
//   orga_mail: "",
//   orga_fb: "",
//   orga_phone: "",
//   orga_users_name: "",
//   orga_feedback: "",
// });
// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value,
//   });
// };
// const handleAddOrder = async () => {
//   try {
//     const response = await fetch("/api/organizationDataInsert", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();
//     console.log(result);
//     setData((prevData) => [...prevData, result.data]);
//   } catch (error) {
//     console.error("Хэрэглэгч нэмэхэд алдаа гарлаа:", error);
//   }
// };
// return (
//   <div className="text-center my-20">
//     <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//       <h2 className="text-midnightblue text-2xl font-semibold">
//         Манай вебтэй хамтрагч байгууллагууд
//       </h2>
//       <div className="py-14">
//         {/* <Slider {...settings}>
//                 {data.map((item, i) => (
//                   <div key={i}>
//                     <Image
//                       src={item.imgSrc}
//                       alt={item.imgSrc}
//                       width={116}
//                       height={36}
//                     />
//                   </div>
//                 ))}
//               </Slider> */}
//       </div>
//       <div className="vg">
//         Түнш болох хүсэлт илгээх
//         <style id="vg "></style>
//       </div>
//       <div>
//         Та бидэнтэй хамтран ажиллахыг хүсч байвал дараах мэдээллийг бидэнд
//         илгээнэ үү.
//       </div>

//       <div>
//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//           <Form.Control
//             placeholder="Байгууллагын нэр"
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//             value={formData.orga_name}
//             onChange={handleInputChange}
//           />
//         </InputGroup>

//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon3">
//             <FaGoogle></FaGoogle>
//           </InputGroup.Text>
//           <Form.Control
//             placeholder="Имейл хаяг"
//             aria-label="Recipient's username"
//             aria-describedby="basic-addon2"
//           />

//           <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
//         </InputGroup>

//         {/* <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label> */}
//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon3">
//             <FaFacebook></FaFacebook>
//           </InputGroup.Text>
//           <Form.Control
//             id="basic-url"
//             aria-describedby="basic-addon3"
//             placeholder="facebook"
//             aria-label="Recipient's username"
//           />
//         </InputGroup>

//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon3">
//             <FcCallback></FcCallback>
//           </InputGroup.Text>

//           <Form.Control
//             id="basic-url"
//             aria-describedby="basic-addon3"
//             placeholder="Утас"
//             aria-label="Recipient's username"
//           />
//         </InputGroup>
//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon3">
//             <FcBusinessman></FcBusinessman>
//           </InputGroup.Text>

//           <Form.Control
//             id="basic-url"
//             aria-describedby="basic-addon3"
//             placeholder="Нэр"
//             aria-label="Recipient's username"
//           />
//         </InputGroup>

//         {/* <Form.Control id="basic-url" aria-describedby="basic-addon3" /> */}
//         <InputGroup>
//           <InputGroup.Text>Санал </InputGroup.Text>
//           <Form.Control as="textarea" aria-label="With textarea" />
//         </InputGroup>
//       </div>
//     </div>
//     <div className=" flex inset-y-5px justify-center">
//       <Button variant="secondary">Илгээх</Button>{" "}
//     </div>
//   </div>
// );
/////////////
import React, { useState } from "react";
import Slider from "react-slick";
import { FcCallback, FcBusinessman } from "react-icons/fc";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

interface OrganizationDataInsert {
  orga_name: string;
  orga_mail: string;
  orga_fb: string;
  orga_phone: number;
  orga_users_name: string;
  orga_feedback: string;
}

const MyOrga: React.FC = () => {
  const [data, setData] = useState<OrganizationDataInsert[]>([]);
  const [formData, setFormData] = useState({
    orga_name: " ",
    orga_mail: "",
    orga_fb: "",
    orga_phone: "",
    orga_users_name: "",
    orga_feedback: "",
  });

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
      console.log(result);
      setData((prevData) => [...prevData, result.data]);
    } catch (error) {
      console.error("Хэрэглэгч нэмэхэд алдаа гарлаа:", error);
    }
  };

  return (
    <div className="text-center my-20">
      {/* Your JSX code here */}
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
      {/* ... */}
      <div className=" flex inset-y-5px justify-center">
        <Button variant="secondary" onClick={handleAddOrder}>
          Илгээх
        </Button>{" "}
      </div>
    </div>
  );
};

export default MyOrga;
