import React from "react";
import {
  StatsIco,
  FrontEndAltIco,
  BackEndAltIco,
  DataBaseAltIco,
} from "../SVG/Svgs";
import { Switch } from "@chakra-ui/react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function PanelCards({ id, styles, serverStatus, image, fe, be, db }) {
  const FeArchi = () => {
    if (fe) {
      return <FrontEndAltIco />;
    }
  };
  const BeArchi = () => {
    if (be) {
      return <BackEndAltIco className={styles.backendIco} />;
    }
  };
  const DbArchi = () => {
    if (db) {
      return <DataBaseAltIco className={styles.dataBaseIco} />;
    }
  };
  return (
    <Col key={id} xl={4} className={`${styles.panel_AltHostDivCol} h-100`}>
      <Card
        className={`${styles.panel_CurHostCard} ${styles.panel_ArchiCard}`}
      >
        <div className={styles.panel_CurHostCard__Inner}>
          <div className={styles.panel_CurHostCard__Col1}>
            <div className={styles.panel__altHostImg_Div}>
              <img src={image} alt="host icon" />
            </div>

            <div className={styles.panel__CurHostCard_ServerStats}>
              <p>
                Server Status: <span>{serverStatus}</span>
              </p>
            </div>
            <div className={styles.panel__CurHostCard_MoreServerStats}>
              <StatsIco /> <p>Info</p>
            </div>
          </div>
          <div className={styles.panel_AltHostCard__Col2}>
            <Switch className="switch" colorScheme="purple" />
            <div className={styles.panel_AltHost_ArchiIcos}>
              {FeArchi()} {BeArchi()} {DbArchi()}
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
}

export default PanelCards;
