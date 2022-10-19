import React from 'react';
import Col from 'react-bootstrap/Col';
import styles from './providers.module.css';

function HProviders(props) {
    return (
        <Col md={3} sm={4} xs={6} className={styles.col_no_padding}>
            <div className={styles.hostPro_Cards}>
                <img src={props.image} alt="" />
            </div>
        </Col>
    );
}

export default HProviders;
