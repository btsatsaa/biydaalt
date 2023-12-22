"use client";
import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FcCallback, FcBusinessman } from "react-icons/fc";

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    facebook: "",
    phone: "",
    name: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // console.log(formData.feedback);
        // Handle any additional logic or UI changes upon successful form submission
      } else {
        console.error("Failed to submit form");
        // Handle any error conditions or display an error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle any error conditions or display an error message
    }
  };

  return (
    <div>
      {/* Your existing form JSX */}

      <div>
        <InputGroup className="mb-3">
          {/* ... Other form fields ... */}
        </InputGroup>

        {/* ... Other form groups ... */}
        <InputGroup>
          <InputGroup.Text>ner </InputGroup.Text>
          <Form.Control
            as="textarea"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-label="With textarea"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            <FaGoogle></FaGoogle>
          </InputGroup.Text>
          <Form.Control
            placeholder="Имейл хаяг"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Санал </InputGroup.Text>
          <Form.Control
            as="textarea"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            aria-label="With textarea"
          />
        </InputGroup>
      </div>
      <div>
        {" "}
        <p>санал:{formData.feedback}</p>
        <p>нэр:{formData.name}</p>
        <p>имейл: {formData.email}</p>
      </div>

      <div className="flex inset-y-5px justify-center">
        <Button variant="secondary" onClick={handleSubmit}>
          Илгээх
        </Button>
      </div>
    </div>
  );
};

export default YourFormComponent;
