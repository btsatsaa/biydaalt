import Banner from "./components/Banner/index";
// import Information from "./components/Information/index";
import Companies from "./components/Companies/Companies";
import Courses from "./components/Courses/index";
import Mentor from "./components/Mentor/index";
import Information from "./components/Information";
import MyDetail from "./components/Detail/index";
import { Row, Col } from "react-bootstrap";
import SwiperCom from "./components/Swiper";

export default function Home() {
  return (
    <main>
      <Row>
        <Col md="12">
          {" "}
          <Banner />
        </Col>
      </Row>

      <Row>
        <Col md="12">
          {" "}
          <Courses />
        </Col>
      </Row>

      <Companies />
      {/* <Filter /> */}

      {/* <Mentor /> */}
      <Information />
      {/* <MyRate /> */}

      {/* <NamesList /> */}
      {/* <YourFormComponent /> */}
      <MyDetail />

      {/* <Payment /> */}
      {/* <Register /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </main>
  );
}
