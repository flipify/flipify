import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import {
    StatsIco,
    FrontEndAltIco,
    BackEndAltIco,
    DataBaseAltIco,
} from '../SVG/Svgs';
import { Switch } from '@chakra-ui/react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Bar } from 'react-chartjs-2';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function PanelCards({ id, styles, serverStatus, image, fe, be, db }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: '',
            },
        },
    };

    const labels = [
        '12/04/21',
        '10/09/21',
        '10/09/21',
        '10/09/21',
        '10/09/21',
        '10/09/21',
        '10/09/21',
    ];

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: [5, 10, 15, 20, 25, 30, 12],
                borderColor: '#4F42C4',
                backgroundColor: '#4F42C4',
            },
        ],
    };

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
                    <div>
                        <div className={styles.panel__altHostImg_Div}>
                            <ReactSVG src={image} />
                        </div>

                        <div className={styles.panel__CurHostCard_ServerStats}>
                            <p>
                                Server Status: <span>{serverStatus}</span>
                            </p>
                        </div>
                        <div
                            onClick={onOpen}
                            className={
                                styles.panel__CurHostCard_MoreServerStats
                            }
                        >
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

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent className="graphModal">
                    <ModalHeader>
                        <ReactSVG src={image} />{' '}
                        <h3 className={styles.panel_graphModal_H3}>
                            Server status stats
                        </h3>
                    </ModalHeader>
                    <ModalBody>
                        <div className={styles.panel_GraphFlex}>
                            <p className={styles.panel_graphModal_P1}>
                                Date of downtime
                            </p>
                            <div className={styles.panel_graphModal_GraphDiv}>
                                <Bar options={options} data={data} />
                                <p className={styles.panel_graphModal_P}>
                                    Time range (hours)
                                </p>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Col>
    );
}

export default PanelCards;
