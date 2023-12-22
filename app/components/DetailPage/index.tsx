// components/SportsPage.tsx

import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { FaPhone } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { TbCategory2 } from "react-icons/tb";
import { TiTickOutline } from "react-icons/ti";
interface SportsPageProps {
  // You can define props if needed
}

const DetailPage: React.FC<SportsPageProps> = () => {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Байгууллагын нэр</div>
          Нарка
        </div>
        <Badge className="flex" bg="primary" pill>
          {/* <FaPhone /> */}
          <FaBuildingColumns />
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Төлөв</div>
          Бүртгэл явагдаж байгаа
        </div>
        <Badge bg="primary" pill>
          <TiTickOutline />
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Ангилал</div>
          Анхан дунд шат
        </div>
        <Badge bg="primary" pill>
          <TbCategory2 />
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default DetailPage;
