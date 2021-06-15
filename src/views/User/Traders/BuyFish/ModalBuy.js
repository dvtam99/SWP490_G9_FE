import React, { useState } from "react";
import { Modal } from "antd";
import { Row, Col } from "reactstrap";
import i18n from "i18next";
import "antd/dist/antd.css";
import Widgets from "../../../../schema/Widgets";
import data from "../../../../data";

const ModalBuy = ({ isShowBuy, setIsShowBuy, currentTran }) => {
  const [transaction, setTransaction] = useState({});

  const handleOk = () => {
    setIsShowBuy(false);
  };
  const handleCancel = () => {
    setIsShowBuy(false);
  };
  const handleChangeTran = (name, value) => {
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Modal
      title={i18n.t("Thêm Mã")}
      visible={isShowBuy}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Row>
        {/* <Col md="6" xs="12">
          <Widgets.Text
            required={true}
            label={i18n.t("buyer")}
            value={transaction.buyer}
            onChange={(e) => handleChangeTran("buyer", e)}
          />
        </Col> */}
        <Col md="6" xs="12">
          <Widgets.Select
            required={true}
            label={i18n.t("typeOfFish")}
            value={transaction.typeOfFish}
            onChange={(e) => handleChangeTran("typeOfFish", e)}
            items={currentTran.arrFish || []}
          />
        </Col>
        <Col md="6" xs="12">
          <Widgets.Text
            required={true}
            label={i18n.t("qtyOfFish(Kg)")}
            value={transaction.qtyOfFish}
            onChange={(e) => handleChangeTran("qtyOfFish", e)}
          />
        </Col>
        <Col md="6" xs="12">
          <Widgets.Select
            required={true}
            label={i18n.t("basket")}
            value={transaction.basket}
            onChange={(e) => handleChangeTran("basket", e)}
            items={data.basket || []}
          />
        </Col>
        <Col md="6" xs="12">
          <Widgets.Select
            required={true}
            label={i18n.t("drum")}
            value={transaction.drum}
            onChange={(e) => handleChangeTran("drum", e)}
            items={data.drum || []}
          />
        </Col>
        <Col md="6" xs="12">
          <Widgets.Select
            required={true}
            label={i18n.t("truck")}
            value={transaction.truck}
            onChange={(e) => handleChangeTran("truck", e)}
            items={data.truck || []}
          />
        </Col>
        {/* <Col md="6" xs="12">
          <Widgets.Text
            required={true}
            label={i18n.t("sellPrice")}
            value={transaction.sellPrice}
            onChange={(e) => handleChangeTran("sellPrice", e)}
          />
        </Col>
        <Col md="6" xs="12">
          <Widgets.Text
            required={true}
            label={i18n.t("seller")}
            value={transaction.seller}
            onChange={(e) => handleChangeTran("seller", e)}
          />
        </Col> */}
      </Row>
    </Modal>
  );
};

export default ModalBuy;
// const style = { background: "#0092ff", padding: "8px", margin: "5px" };
