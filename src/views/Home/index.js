import React from "react";
import { Button } from "reactstrap";
// import apis from "../../services/apis";
import i18n from "i18next";
// import helper from "../../services/helper";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  let history = useHistory();

  return (
    <div>
      <Button
        color="info"
        onClick={() => {
          history.push("buyF");
          // helper.useHistory("buy");
        }}
      >
        {i18n.t("buyGood")}
      </Button>
    </div>
  );
};
export default Dashboard;
